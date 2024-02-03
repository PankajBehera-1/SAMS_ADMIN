import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const EditProfessorDialog = (props) => {
    const {openEditDialog,handleCloseEditDialog} = props
  return (
    <>
        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                    <DialogTitle>Edit Professor Details</DialogTitle>
                    <DialogContent>
                        

                        {/* place the code here  */}



                    
                    </DialogContent>
                    <DialogActions
                    >
                        <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
                        <Button onClick={handleCloseEditDialog} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
    </>
  )
}

export default EditProfessorDialog