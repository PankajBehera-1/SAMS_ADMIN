import { GetApp } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const ViewProfessorDialog = (props) => {
    const {openViewModal,handleCloseViewModal,handleDownloadConfirmation} = props
  return (
    <>
        <Dialog open={openViewModal} onClose={handleCloseViewModal}>
                    <DialogTitle>View Professor Details</DialogTitle>
                    <DialogContent>
                        

                        {/* paste code here */}


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