import React from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'

const ViewRowDialog = (props) => {
    const { openDialog, handleCloseDialog } = props
  return (
    <>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Professor Details</DialogTitle>
        <DialogContent sx={{width:"70%",height:"70%"}}>
          {/* Input fields for editing details */}
          <TextField label="Reg No" fullWidth sx={{ mb: 1, mt: 1 }} />
          <TextField label="Name" fullWidth sx={{ mb: 1 }} />
          <TextField label="DOB" fullWidth sx={{ mb: 1 }} />
          <TextField label="Department" fullWidth sx={{ mb: 1 }} />
          <TextField label="Gender" fullWidth sx={{ mb: 1 }} />
          {/* Add more input fields for additional details */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleCloseDialog} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ViewRowDialog