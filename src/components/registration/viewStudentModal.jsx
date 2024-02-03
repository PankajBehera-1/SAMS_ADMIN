import { GetApp } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const ViewStudentModal = (props) => {
    const {Img, selectedProfessor, openViewModal, handleCloseViewModal, handleDownloadConfirmation} = props
    return (
        <>
            {/* Modal for viewing details */}
            <Dialog open={openViewModal} onClose={handleCloseViewModal}>
                <DialogTitle>View Professor Details</DialogTitle>
                <DialogContent>
                    <img src={Img} alt="Professor" style={{ width: 100, height: 100, borderRadius: '50%' }} />
                    <Typography>Registration Number: {selectedProfessor?.regNo}</Typography>
                    <Typography>Name: {selectedProfessor?.name}</Typography>
                    <Typography>DOB: {selectedProfessor?.dob}</Typography>
                    <Typography>Department: {selectedProfessor?.department}</Typography>
                    <Typography>Gender: {selectedProfessor?.gender}</Typography>
                    {/* Add more details here as needed */}
                    <Typography>Do you want to download the details?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseViewModal} color="primary">Cancel</Button>
                    <Button onClick={handleDownloadConfirmation} color="primary" startIcon={<GetApp />}>Download</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ViewStudentModal