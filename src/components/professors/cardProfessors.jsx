import React, { useState } from 'react';
import ResponsiveDrawer from '../../common/sidebar';
import style from '../dashboard/dashboard.module.css';
import CardContent from '@mui/material/CardContent';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Card from '@mui/material/Card';
import { GetApp } from '@mui/icons-material'; // Import GetApp icon for the download button

const CardProfessors = () => {
    const [openViewModal, setOpenViewModal] = useState(false); // State for controlling view modal open/close

    // Dummy data for all professors
    const professors = [
        { 
            id: 1, 
            regNo: 'P001', 
            name: 'Professor 1', 
            age: 45, 
            department: 'Computer Science', 
            experience: 20 
        },
        { 
            id: 2, 
            regNo: 'P002', 
            name: 'Professor 2', 
            age: 50, 
            department: 'Electrical Engineering', 
            experience: 25 
        },
        { 
            id: 3, 
            regNo: 'P003', 
            name: 'Professor 3', 
            age: 55, 
            department: 'Mechanical Engineering', 
            experience: 30 
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
            <Grid item sx={{ display: "flex", gap: 2 }}>
                <Grid>
                    <ResponsiveDrawer />
                </Grid>

                <Grid className={style.dashboardSection}>
                    {/* Counting Cards */}
                    <Grid container justifyContent="center" xs={12} md={12} lg={12} gap={6} paddingBottom="5%" paddingRight="1%">
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card} onClick={handleOpenViewModal}>
                                <CardContent>
                                    <b>Total Professor</b>
                                    <p>30</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card} onClick={handleOpenViewModal}>
                                <CardContent>
                                    <b>Btech Professor</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card} onClick={handleOpenViewModal}>
                                <CardContent>
                                    <b>Mtech Professor</b>
                                    <p>10</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card} onClick={handleOpenViewModal}>
                                <CardContent>
                                    <b>MBA Professor</b>
                                    <p>10</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={2}>
                            <Card className={style.card} onClick={handleOpenViewModal}>
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
                                <ListItemText primary={`Experience: ${professor.experience} years`} />
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

            
        </>
    )
}

export default CardProfessors;
