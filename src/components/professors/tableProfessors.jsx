import React, { useState } from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    TablePagination,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Paper,
} from '@mui/material';
import { Visibility, Edit, Delete, GetApp } from '@mui/icons-material'; // Import MUI icons
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';

const SampleTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8); // Number of rows per page initially set to 8
    const [openEditDialog, setOpenEditDialog] = useState(false); // State for the edit dialog
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for the delete dialog
    const [openViewModal, setOpenViewModal] = useState(false); // State for the view modal

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

    const handleOpenViewModal = () => {
        setOpenViewModal(true);
    };

    const handleCloseViewModal = () => {
        setOpenViewModal(false);
    };

    const handleDownloadConfirmation = () => {
        // Implement download logic here
        handleCloseViewModal();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const totalRows = 100; // Replace with the actual count of your data

    // Sample data for professors
    const professors = Array.from({ length: totalRows }, (_, index) => ({
        regNo: `00${index + 1}`,
        name: `John Doe ${index + 1}`,
        age: 30 + index,
        department: "IT",
        joiningDate: "00/00/0000",
    }));

    return (
        <Paper>
            <Grid container lg={12} style={{ marginTop: "8%", marginLeft: "18%" }}>
                <Grid item style={{ width: "80%", position: "absolute" }}>


                    <Grid container direction="row" lg={12} style={{ display: "flex",  gap: 870, marginBottom:"1%" }}>
                        <Grid item >
                            <Typography variant="h6" gutterBottom>All Professors</Typography>
                        </Grid>
                        <Grid item  sx={{display:"flex", gap: 1}}>
                            <ReplayCircleFilledIcon style={{ width: "12%", height:"3vh",cursor: "pointer" }} />

                            <input type="text" placeholder="Search by Reg. No." />
                        </Grid>

                    </Grid>
                    <div style={{ overflowX: "auto" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Name</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Age</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Department</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Joining Date</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {professors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((professor, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{professor.regNo}</TableCell>
                                        <TableCell>{professor.name}</TableCell>
                                        <TableCell>{professor.age}</TableCell>
                                        <TableCell>{professor.department}</TableCell>
                                        <TableCell>{professor.joiningDate}</TableCell>
                                        <TableCell>
                                            {/* View, edit, and delete icons */}
                                            <Visibility color="primary" onClick={handleOpenViewModal} />
                                            <Edit color="secondary" onClick={handleOpenEditDialog} />
                                            <Delete color="error" onClick={handleOpenDeleteDialog} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <TablePagination
                        rowsPerPageOptions={[8, 10, 25]} // Options for rows per page
                        component="div"
                        count={totalRows} // Total number of rows
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>

                {/* Dialog for editing details */}
                <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                    <DialogTitle>Edit Professor Details</DialogTitle>
                    <DialogContent>
                        {/* Input fields for editing details */}
                        <TextField label="Reg No" fullWidth sx={{ mb: 1, mt: 1 }} />
                        <TextField label="Name" fullWidth sx={{ mb: 1 }} />
                        <TextField label="Age" fullWidth sx={{ mb: 1 }} />
                        <TextField label="Department" fullWidth sx={{ mb: 1 }} />
                        {/* Add more input fields for additional details */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
                        <Button onClick={handleCloseEditDialog} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>

                {/* Dialog for deleting details */}
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

                {/* Modal for viewing details */}
                <Dialog open={openViewModal} onClose={handleCloseViewModal}>
                    <DialogTitle>View Professor Details</DialogTitle>
                    <DialogContent>
                        <Typography>Registration Number: {professors.regNo}</Typography>
                        <Typography>Name: {professors.name}</Typography>
                        <Typography>Age: {professors.age}</Typography>
                        <Typography>Department: {professors.department}</Typography>
                        {/* Add more details here as needed */}
                        <Typography>Do you want to download the details?</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseViewModal} color="primary">Cancel</Button>
                        <Button onClick={handleDownloadConfirmation} color="primary" startIcon={<GetApp />}>Download</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Paper>

    );
};

export default SampleTable;