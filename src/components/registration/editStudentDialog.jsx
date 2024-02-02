import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'
import React from 'react'

const EditStudentDialog = (props) => {
  const { openEditDialog, handleCloseEditDialog } = props
  return (
    <>
      {/* Dialog for editing details */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
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
          <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
          <Button onClick={handleCloseEditDialog} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default EditStudentDialog