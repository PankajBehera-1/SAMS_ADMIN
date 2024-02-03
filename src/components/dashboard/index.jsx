import React, { useState } from "react";
import ResponsiveDrawer from "../../common/sidebar";
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { GetApp } from '@mui/icons-material';
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
  const [openViewModal, setOpenViewModal] = useState(false); // State for controlling view modal open/close

    // Dummy data for all professors
    const professors = [
        { 
            id: 1, 
            regNo: 'P001', 
            name: 'Student 1', 
            age: 22, 
            department: 'Computer Science', 
            
        },
        { 
            id: 2, 
            regNo: 'P002', 
            name: 'Student 2', 
            age: 21, 
            department: 'Electrical Engineering', 
            
        },
        { 
            id: 3, 
            regNo: 'P003', 
            name: 'Student 3', 
            age: 20, 
            department: 'Mechanical Engineering', 
             
        },
        // Add more professors as needed
    ];

    // Function to handle opening the view modal
    const handleOpenViewModal = () => {
        setOpenViewModal(true);
    };

    // Function to handle closing the view modal
    const handleCloseViewModal = () => {
        setOpenViewModal(false);
    };

    // Function to handle downloading all professor details
    const handleDownloadAllProfessors = () => {
        // Convert the list of professors to a JSON string
        const professorsJSON = JSON.stringify(professors);
        
        // Create a Blob object containing the JSON data
        const blob = new Blob([professorsJSON], { type: 'application/json' });

        // Create a URL for the Blob object
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'professors.json'; // Set the download attribute
        document.body.appendChild(a);

        // Click the anchor element to start the download
        a.click();

        // Remove the temporary anchor element
        document.body.removeChild(a);

        // Revoke the URL to release the resources
        URL.revokeObjectURL(url);
    };

  return (
    <>
      <Grid item sx={{ display: "flex", gap: 2 ,overflow:"hidden"}}>
        <Grid>
          <ResponsiveDrawer />
        </Grid>
<Grid>
        <Grid className={style.dashboardSection}>
          {/* Counting Cards */}
          <Grid
            container
            justifyContent="center"
            xs={12}
            md={12}
            lg={12}
            gap={5}
            // paddingBottom="-12%"
            paddingRight="1%"
          >
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Total Professors</b>
                  <p>30</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Btech Professors</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Mtech Professors</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent className={style.mba}>
                  <b>MBA Professors</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>MCA Professors</b>
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


        <Grid className={style.dashboardSection}>
          {/* Counting Cards */}
          <Grid
            container
            justifyContent="center"
            xs={12}
            md={12}
            lg={12}
            gap={5}
            paddingBottom="5%"
            paddingRight="1%"
            marginTop={"-4%"}
          >
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Total Student</b>
                  <p>30</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Btech Student</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>Mtech Student</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent className={style.mba}>
                  <b>MBA Student</b>
                  <p>10</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={3} lg={2}>
              <Card className={style.card} onClick={handleOpenViewModal}>
                <CardContent>
                  <b>MCA Student</b>
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


        {/* Dialog for viewing professor details */}
        <Dialog open={openViewModal} onClose={handleCloseViewModal}>
                <DialogTitle>List of Professors</DialogTitle>
                <DialogContent>
                    {/* Display details of all professors */}
                    <List>
                        {professors.map((professor) => (
                            <ListItem key={professor.id}>
                                <ListItemText primary={professor.name} secondary={`Department: ${professor.department}`} />
                                <ListItemText primary={`Reg No: ${professor.regNo}`} secondary={`Age: ${professor.age}`} />
                            </ListItem>
                        ))}
                    </List>
                    {/* Add more details here as needed */}
                    <Typography>Do you want to download the details?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseViewModal} color="primary">Cancel</Button>
                    <Button onClick={handleDownloadAllProfessors} color="primary" startIcon={<GetApp />}>Download</Button>
                </DialogActions>
            </Dialog>

      </Grid>

      <StudentData data={rows} name={"biplab"} />
    </>
  );
};

export default Dashboard;
