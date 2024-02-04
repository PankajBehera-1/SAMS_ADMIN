import React, { useState } from 'react';
import ResponsiveDrawer from '../../common/sidebar';
import { Grid, Paper, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import ViewRowDialog from './viewRowDialog';

const TableData = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set initial rows per page

    const rows = [
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        // Other rows...
    ];

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <ResponsiveDrawer />
            <Grid sx={{ padding: 2, ml: 32, mr: 2, mt: 8, overflowX: "hidden" }}>
                <Paper>
                    <TableContainer>
                        <Grid container direction="row" lg={12} sx={{ ml: 1, mt: 2, mb: -1 }}>
                            <Grid item lg={6}>
                                <Typography variant="h6" gutterBottom>Current Year Admission List</Typography>
                            </Grid>
                            <Grid item lg={6}>
                            </Grid>
                        </Grid>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Name</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>DOB</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Department</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Gender</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow key={index} hover onClick={() => { handleOpenDialog(row) }} style={{ cursor: 'pointer' }} >
                                            <TableCell>{row.regNo}</TableCell>
                                            <TableCell>{row.year}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.dob}</TableCell>
                                            <TableCell>{row.department}</TableCell>
                                            <TableCell>{row.mobileNo}</TableCell>
                                            <TableCell>{row.gender}</TableCell>
                                            <TableCell style={{ color: "green" }}>{row.status}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
                            component="div"
                            count={rows.length} // Total number of rows
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Paper>
                <ViewRowDialog
                    openDialog={openDialog}
                    handleCloseDialog={handleCloseDialog}
                />
            </Grid>
        </>
    )
}

export default TableData;
