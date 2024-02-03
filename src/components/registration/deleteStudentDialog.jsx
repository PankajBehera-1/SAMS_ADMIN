import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const DeleteStudentDialog = (props) => {
  const { openDeleteDialog, handleCloseDeleteDialog } = props
  return (
    <>
      {/* Dialog for deleting details */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Professor</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this professor?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">Cancel</Button>
          <Button onClick={handleCloseDeleteDialog} color="primary">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteStudentDialog