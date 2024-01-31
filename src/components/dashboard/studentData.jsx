import React, { useState } from 'react'
import style from './dashboard.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Margin } from '@mui/icons-material';
import ViewStudentDetails from './viewStudentDetails';



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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];




const StudentData = (props) => {
    const {data} = props;
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            <Paper sx={{ width: '100%' }} style={{ width: '75%', marginLeft: '20%', alignItems: "center", gap: 5, marginTop: "-30px" }}>

                <Grid className={style.tableFilter}>
                    <h3>All Students</h3>
                    <Grid style={{ display: "flex", alignItems: "center", gap: 5 }}>

                        <ReplayCircleFilledIcon style={{ width: "10%", cursor: "pointer" }} />

                        <input type="text" placeholder="Search by Reg. No." />
                    </Grid>
                </Grid>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table sx={{ minWidth: 10 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left" className={style.tableTitle}>Reg. No.</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>Name</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>DOB</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>Education</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>Branch</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>PassYear</StyledTableCell>
                                <StyledTableCell align="left" className={style.tableTitle}>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <StyledTableRow key={row.regNo}>
                                    <StyledTableCell component="th" scope="row" className={style.tableTitle}>
                                        {index}
                                    </StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>{row.dob}</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>Btech</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>CSE</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>20-24</StyledTableCell>
                                    <StyledTableCell align="left" style={{ gap: 1, display: "flex", cursor: "pointer" }}>
                                    <IconButton onClick={()=>setOpen(true)}><PreviewIcon  /></IconButton>
                                    {/* style={{ color: "#179903", width: "20%", cursor: "pointer" }} */}
                                        <EditIcon style={{ color: "#D5A10B", width: "20%", cursor: "pointer" }} />
                                        <DeleteForeverIcon style={{ color: "#E30707", width: "20%", cursor: "pointer" }} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack spacing={1}>
                    <Pagination count={5} color="primary" />
                </Stack>
            </Paper>

            <ViewStudentDetails open={open} setOpen={setOpen}/>
        </div>
    )
}

export default StudentData