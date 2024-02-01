import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import style from '../dashboard/dashboard.module.css';
import CardContent from '@mui/material/CardContent';
import {Grid } from '@mui/material';
import Card from '@mui/material/Card';
// import ProfessorTable from './professorsTable';


// const rows = [
//     { regNo: '1', name: 'Bijay ketan bhanja', age: '30', branch: 'cse', experince: '20' },
//     { regNo: '2', name: 'Bijay ketan bhanja', age:"40", branch: 'cse', experince: '20' },
//     { regNo: '3', name: 'Bijay ketan bhanja', age: '40', branch: 'cse', experince: '20' },
//     { regNo: '4', name: 'Bijay ketan bhanja', age: '40', branch: 'cse', experince: '20' },
//     { regNo: '5', name: 'Bijay ketan bhanja', age: '40', branch: 'cse', experince: '20' },
//     { regNo: '6', name: 'Bijay ketan bhanja', age: '40', branch: 'cse', experince: '20' },
//     { regNo: '7', name: 'Bijay ketan bhanja', age: '40', branch: 'cse', experince: '20' }
// ]



const cardProfessors = () => {
    return (
        <>
            {/* <ResponsiveDrawer /> */}
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
                                    <b>Total Professor</b>
                                    <p>30</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Btech Professor</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>Mtech Professor</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>MBA Professor</b>
                                    <p>10</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card}>
                                <CardContent>
                                    <b>MCA Professor</b>
                                    <p>23</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>

                    <Button onClick={() => setName('sahoo')} variant="contained">Contained</Button> */}
                </Grid>
            </Grid>
            {/* <ProfessorTable data={rows} name={"bijay"} /> */}
        </>
    )
}

export default cardProfessors