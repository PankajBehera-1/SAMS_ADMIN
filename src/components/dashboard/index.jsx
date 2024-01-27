import React from 'react';
import ResponsiveDrawer from "../../common/sidebar";
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import style from './dashboard.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Dashboard = () => {
    return (
        <>

            <Grid item sx={{ display: "flex", gap: 2 }}>
                <Grid>
                    <ResponsiveDrawer />
                </Grid>

                <Grid className={style.dashboardSection}>
                    {/* Counting Cards */}
                    <Grid container justifyContent="center" xs={12} md={12} lg={12} gap={6} paddingBottom="5%" paddingRight="1%">
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Total Students</b>
                                    <p>30</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Btech Students</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Mtech Students</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>MBA & MCA Students</b>
                                    <p>10</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Total Faculties</b>
                                    <p>23</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>




                </Grid>

            </Grid>
            <Paper sx={{ width: '100%' }} style={{ width: '75%', marginLeft: '20%', alignItems: "center", gap: 5 ,marginTop:"-30px"}}>

                <Grid className={style.tableFilter}>
                    <h3>All Students</h3>
                    <Grid style={{ display: "flex", alignItems: "center", gap: 5 }}>

                        <ReplayCircleFilledIcon style={{ width: "10%", cursor: "pointer" }} />

                        <input type="text" placeholder="Search by Reg. No."/>
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
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" className={style.tableTitle}>
                                        2001225043
                                    </StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>
                                        pankaj
                                    </StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>20 cse 29</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>Btech</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>CSE</StyledTableCell>
                                    <StyledTableCell align="left" className={style.tableTitle}>20-24</StyledTableCell>
                                    <StyledTableCell align="left" style={{ gap: 1, display: "flex", cursor: "pointer" }}>
                                        <PreviewIcon style={{ color: "#179903", width: "20%", cursor: "pointer" }} />
                                        <EditIcon style={{ color: "#D5A10B", width: "20%", cursor: "pointer" }} />
                                        <DeleteForeverIcon style={{ color: "#E30707", width: "20%", cursor: "pointer" }} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack spacing={2}>
                    <Pagination count={10} color="primary" />
                </Stack>
            </Paper>
        </>
    )
}

export default Dashboard