import React, { useState } from "react";
import style from "./dashboard.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import { Visibility, Edit, Delete } from '@mui/icons-material'; // Import MUI icons
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TablePagination from '@mui/material/TablePagination'; // 1. Import TablePagination
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import Img from "../../common/images/profile.png";
import { GetApp } from '@mui/icons-material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StudentData = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0); // Initialize page to 0
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openViewModal, setOpenViewModal] = useState(false); // State for the view modal
  const [selectedProfessor, setSelectedProfessor] = useState(null); // State to hold the selected professor
  const [openEditDialog, setOpenEditDialog] = useState(false); // State for the edit dialog
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for the delete dialog

  // Define totalRows as the length of your data array
  const totalRows = data.length;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const indexOfLastRow = (page + 1) * rowsPerPage; // Adjust calculation of indexOfLastRow
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleOpenViewModal = (professor) => {
    setSelectedProfessor(professor);
    setOpenViewModal(true);
  };

  const handleCloseViewModal = () => {
    setOpenViewModal(false);
  };

  const handleDownloadConfirmation = () => {
    try {
      // Convert selected professor data to JSON format
      const professorData = JSON.stringify(selectedProfessor);

      // Create a Blob object with the JSON data
      const blob = new Blob([professorData], { type: 'application/json' });

      // Create a temporary anchor element to trigger the download
      const anchor = document.createElement('a');
      anchor.download = `professor_details_${selectedProfessor.regNo}.json`;

      // Create a URL for the Blob object and assign it to the anchor's href attribute
      anchor.href = window.URL.createObjectURL(blob);

      // Click the anchor element to trigger the download
      anchor.click();

      // Cleanup: Revoke the URL to free up resources
      window.URL.revokeObjectURL(anchor.href);

      handleCloseViewModal();
    } catch (error) {
      console.error("Error generating JSON:", error);
    }
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
};

const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
};

  return (
    <div>
      <Paper
        sx={{ width: "100%" }}
        style={{
          width: "75%",
          marginLeft: "20%",
          alignItems: "center",
          gap: 5,
          marginTop: "-30px",
        }}
      >
        <Grid className={style.tableFilter}>
          <h3>All Students</h3>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Registration Number"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 10 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left" className={style.tableTitle}>
                  Reg. No.
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  Name
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  DOB
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  Education
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  Branch
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  PassYear
                </StyledTableCell>
                <StyledTableCell align="left" className={style.tableTitle}>
                  Actions
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row, index) => (
                <StyledTableRow key={row.regNo}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className={style.tableTitle}
                  >
                    {(page * rowsPerPage) + index + 1}
                  </StyledTableCell>

                  <StyledTableCell align="left" className={style.tableTitle}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left" className={style.tableTitle}>
                    {row.dob}
                  </StyledTableCell>
                  <StyledTableCell align="left" className={style.tableTitle}>
                    Btech
                  </StyledTableCell>
                  <StyledTableCell align="left" className={style.tableTitle}>
                    CSE
                  </StyledTableCell>
                  <StyledTableCell align="left" className={style.tableTitle}>
                    20-24
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    style={{ gap: 1, display: "flex", cursor: "pointer" }}
                  >
                    <Icon onClick={() => setOpen(true)}>
                      <Visibility style={{ color: "blue " }} onClick={() => handleOpenViewModal(row)} />
                    </Icon>
                    <Edit
                      style={{
                        color: "purple ",
                        cursor: "pointer",
                      }}
                      onClick={handleOpenEditDialog} />
                    <Delete
                      style={{
                        color: "red ",
                        cursor: "pointer",
                      }}
                      onClick={handleOpenDeleteDialog} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={1}>
          <TablePagination
            rowsPerPageOptions={[8, 10, 25]}
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </Paper>


      {/* Modal for viewing details */}
      <Dialog open={openViewModal} onClose={handleCloseViewModal}>
        <DialogTitle>View Student Details</DialogTitle>
        <DialogContent>
          <img src={Img} alt="Professor" style={{ width: 100, height: 100, borderRadius: '50%' }} />
          <Typography>Registration Number: {selectedProfessor && selectedProfessor.regNo}</Typography>
          <Typography>Name: {selectedProfessor && selectedProfessor.name}</Typography>
          <Typography>Age: {selectedProfessor && selectedProfessor.age}</Typography>
          <Typography>Department: {selectedProfessor && selectedProfessor.department}</Typography>
          {/* Add more details here as needed */}
          <Typography>Do you want to download the details?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewModal} color="primary">Cancel</Button>
          <Button onClick={handleDownloadConfirmation} color="primary" startIcon={<GetApp />}>Download</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for editing details */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Student Details</DialogTitle>
        <DialogContent>
          {/* Input fields for editing details */}
          <TextField label="Reg No" fullWidth sx={{ mb: 1, mt: 1 }} />
          <TextField label="Name" fullWidth sx={{ mb: 1 }} />
          <TextField label="Department" fullWidth sx={{ mb: 1 }} />
          {/* Add more input fields for additional details */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
          <Button onClick={handleCloseEditDialog} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Professor</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this professor?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">Cancel</Button>
          <Button onClick={handleCloseDeleteDialog} color="primary">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentData;