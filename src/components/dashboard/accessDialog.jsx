import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const AccessDialog = (props) => {
    const{openDialog, handleCloseDialog} = props
    return (
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Edit Professor Details</DialogTitle>
                <DialogContent sx={{ width: "70%", height: "70%" }}>
                    {/* Input fields for editing details */}
                    <TextField label="Reg No" fullWidth sx={{ mb: 1, mt: 1 }} />
                    <TextField label="Email-id" fullWidth sx={{ mb: 1 }} />
                    <TextField label="Mobile no." fullWidth sx={{ mb: 1 }} />
                    
                    {/* Add more input fields for additional details */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                    <Button onClick={handleCloseDialog} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AccessDialog