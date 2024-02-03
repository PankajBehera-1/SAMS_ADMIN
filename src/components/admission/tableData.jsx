import React, { useState } from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import { Grid, Paper, Typography } from '@mui/material'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ViewRowDialog from './viewRowDialog';


const TableData = (props) => {
    const [openDialog, setOpenDialog] = useState(false); 

    const rows = [
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '001', year: 2020, name:"Qwerty", email: 'example1@example.com', dob:"00-00-0000", department:"Mtech", mobileNo: '123-456-7890', gender:"Male", status:"Approved" },
        { regNo: '002', year: 2019, name:"Qwerty", email: 'example2@example.com', dob:"00-00-0000", department:"MBA",   mobileNo: '234-567-8901', gender:"Male", status:"Approved" },
        { regNo: '002', year: 2019, name:"Qwerty", email: 'example2@example.com', dob:"00-00-0000", department:"MCA",   mobileNo: '234-567-8901', gender:"Male", status:"Approved" },
        { regNo: '003', year: 2021, name:"Qwerty", email: 'example3@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '345-678-9012', gender:"Male", status:"Approved" },
        { regNo: '003', year: 2021, name:"Qwerty", email: 'example3@example.com', dob:"00-00-0000", department:"MCA",   mobileNo: '345-678-9012', gender:"Male", status:"Approved" },
        { regNo: '004', year: 2018, name:"Qwerty", email: 'example4@example.com', dob:"00-00-0000", department:"MBA",   mobileNo: '456-789-0123', gender:"Male", status:"Approved" },
        { regNo: '004', year: 2018, name:"Qwerty", email: 'example4@example.com', dob:"00-00-0000", department:"Btech", mobileNo: '456-789-0123', gender:"Male", status:"Approved" },
        { regNo: '002', year: 2019, name:"Qwerty", email: 'example2@example.com', dob:"00-00-0000", department:"Mtech", mobileNo: '234-567-8901', gender:"Male", status:"Approved" }
    ];
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

   
    return (
        <>
            <ResponsiveDrawer />
            <Grid sx={{padding:2, ml:32, mr:2,mt:8}}>
                <Paper>
                    <TableContainer>
                        <Grid sx={{ ml: 1, mt: 2, mb: -1 }}>
                            <Typography variant="h6" gutterBottom>Btech Students</Typography>
                        </Grid>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Name</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Department</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Gender</TableCell>
                                    <TableCell style={{ backgroundColor: "black", color: "white" }}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} hover onClick={() => {handleOpenDialog(row) }} style={{ cursor: 'pointer' }} >
                                        <TableCell>{row.regNo}</TableCell>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.department}</TableCell>
                                        <TableCell>{row.mobileNo}</TableCell>
                                        <TableCell>{row.gender}</TableCell>
                                        <TableCell style={{color:"green"}}>{row.status}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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

export default TableData