import React, { useState } from "react";
import { Visibility, Edit, Delete } from "@mui/icons-material"; // Import MUI icons
import SearchIcon from "@mui/icons-material/Search";
import ViewProfessorDialog from "./viewProfessorDialog";
import EditProfessorDialog from "./editProfessorDialog";
import style from "../../common/css/Profesor.module.css"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

const TableProfessors = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8); // Number of rows per page initially set to 8
  const [openEditDialog, setOpenEditDialog] = useState(false); // State for the edit dialog
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for the delete dialog
  const [openViewModal, setOpenViewModal] = useState(false); // State for the view modal
  const [selectedProfessor, setSelectedProfessor] = useState(null); // State to hold the selected professor
  const [searchQuery, setSearchQuery] = useState("");

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
      const blob = new Blob([professorData], { type: "application/json" });

      // Create a temporary anchor element to trigger the download
      const anchor = document.createElement("a");
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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChangeRowsPerPage = (event, newPage) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(newPage);
  };

  const totalRows = 100; // Replace with the actual count of your data

  // Sample data for professors
  const professors = Array.from({ length: totalRows }, (_, index) => ({
    regNo: `00${index + 1}`,
    name: `John Doe ${index + 1}`,
    email: "qwer@gmail.com",
    age: 30 + index,
    mobile: "1234567890",
    department: "IT",
    joiningDate: "00/00/0000",
  }));

  const filteredProfessors = professors.filter((professor) =>
    professor.regNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper>
      <Grid container lg={12} style={{ marginLeft: "18%" }}>
        <Grid item style={{ width: "80%", position: "absolute" }}>
          <Grid>
            <TableContainer component={Paper} sx={{ mb: 5 }}>
              <Grid
                container
                direction="row"
                lg={12}
                style={{ display: "flex", gap: 770, marginBottom: "1%" }}
              >
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>
                    All Professors
                  </Typography>
                </Grid>
                <Grid item sx={{ width: "10%", mt: 1 }}>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 300,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 ,color:"midnightblue"}}
                      placeholder="Search by Registration Number"
                      inputProps={{ "aria-label": "search google maps" }}
                      onChange={handleSearchInputChange}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon style={{color:"black"}}/>
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Reg No
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Age
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Mobile
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Department
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Joining Date
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProfessors
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((professor, index) => (
                      <TableRow key={index}>
                        <TableCell>{professor.regNo}</TableCell>
                        <TableCell>{professor.name}</TableCell>
                        <TableCell>{professor.email}</TableCell>
                        <TableCell>{professor.age}</TableCell>
                        <TableCell>{professor.mobile}</TableCell>
                        <TableCell>{professor.department}</TableCell>
                        <TableCell>{professor.joiningDate}</TableCell>
                        <TableCell sx={{ display: "flex", spacing: "6" }}>
                          {/* View, edit, and delete icons */}
                          <Visibility className={style.hoveradd}
                            sx={{ padding: "1px" }}
                            color="primary"
                            onClick={() => handleOpenViewModal(professor)}
                          />
                          <Edit className={style.hoveradd}
                            sx={{ padding: "1px", margin: "0 15px 0 15px" }}
                            color="secondary"
                            onClick={handleOpenEditDialog}
                          />
                          <Delete className={style.hoveradd}
                            sx={{ padding: "1px" }}
                            color="error"
                            onClick={handleOpenDeleteDialog}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[8, 10, 25]} // Options for rows per page
                component="div"
                count={totalRows} // Total number of rows
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangeRowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Grid>
        </Grid>

        {/* Dialog for editing details */}
        <EditProfessorDialog
          openEditDialog={openEditDialog}
          handleCloseEditDialog={handleCloseEditDialog}
        />

        {/* Dialog for deleting details */}
        <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
          <DialogTitle>Delete Professor</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete this professor?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* Modal for viewing details */}
        <ViewProfessorDialog
          
          openViewModal={openViewModal}
          handleCloseViewModal={handleCloseViewModal}
          handleDownloadConfirmation={handleDownloadConfirmation}
        />
      </Grid>
    </Paper>
  );
};

export default TableProfessors;
