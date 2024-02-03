import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import StudentTable from './studentTable'
import { Grid } from '@mui/material';


const StudentDetails = (props) => {
  // const [jingalalll] = props;
  const StudentDetails = [
    { regNo: "1", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "2", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "3", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "4", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "5", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "6", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "7", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "8", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
    { regNo: "9", year:"0000", name: "name", email: "asd@gmail.com", dob: "02-12-1994", mobile: "1234567890", department: "IT", gender: "male" },
  ]
  return (
    <>
      <ResponsiveDrawer />
      <Grid sx={{ mt: 10 }}>
        <StudentTable data={StudentDetails} />
      </Grid>

    </>
  )
}

export default StudentDetails;