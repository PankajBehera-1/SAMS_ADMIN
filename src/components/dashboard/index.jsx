import React, { useState } from 'react'
import ResponsiveDrawer from '../../common/sidebar'
// import TableProfessors from './tableProfessors'
import Cards from './card'
import { Button, Grid } from '@mui/material'
import StudentData from './studentData'
import AccessDialog from './accessDialog'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ViewDashboard = () => {
  const [openDialog, setOpenDialog] = useState(false); 
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
  return (
    <>
      <ResponsiveDrawer />

      <Grid container direction="row" lg={12}>
        <Grid item lg={12}>
          <Cards />
        </Grid>
        <Grid item lg={12}>
        <Button sx={{ml:45, mb:5, backgroundColor:"orange"}} onClick={() => {handleOpenDialog()}} color="primary"><AddCircleIcon/>Give Access To</Button>

        </Grid>
        <Grid item lg={12}>
          <StudentData />
        </Grid>

        <AccessDialog
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </Grid>
    </>
  )
}
export default ViewDashboard;