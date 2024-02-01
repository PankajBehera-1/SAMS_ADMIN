import React, { useState } from "react";
import ResponsiveDrawer from "../../common/sidebar";
import { Button, Grid, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./dashboard.module.css";
import StudentData from "./studentData";

const rows = [
  {
    regNo: "1",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "2",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "3",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "4",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "5",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "6",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
  {
    regNo: "7",
    name: "biplab",
    dob: "12-12-1987",
    edu: "B.tech",
    branch: "cse",
    passyear: "2024",
  },
];

const Dashboard = (props) => {
  // const [name, setName] = useState(4);
  return (
    <>
      <Grid item sx={{ display: "flex", gap: 2 }}>
        <Grid>
          <ResponsiveDrawer />
        </Grid>

        <Grid className={style.dashboardSection}>
          {/* Counting Cards */}
          <Grid
            container
            justifyContent="center"
            xs={12}
            md={12}
            lg={12}
            gap={6}
            paddingBottom="5%"
            paddingRight="1%"
          >
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
                <CardContent className={style.mba}>
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
          {/* <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>

                    <Button onClick={() => setName('sahoo')} variant="contained">Contained</Button> */}
        </Grid>
      </Grid>

      <StudentData data={rows} name={"biplab"} />
    </>
  );
};

export default Dashboard;
