import { GetApp } from '@mui/icons-material'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React from 'react'

const ViewProfessorDialog = (props) => {
  const { openViewModal, handleCloseViewModal, handleDownloadConfirmation} = props
  return (
    <>
      <Dialog open={openViewModal} onClose={handleCloseViewModal}>
        <DialogTitle>View Professor Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} align="center">
              <Avatar  sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Reg No:</strong> </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Name:</strong> </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Email:</strong> </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Mobile:</strong> </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Date of Joining:</strong> </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Department:</strong></Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewModal} color="primary">Cancel</Button>
          <Button onClick={handleDownloadConfirmation} color="primary" startIcon={<GetApp />}>Download</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ViewProfessorDialog