import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import StudentTable from './studentTable'
import { Grid } from '@mui/material';


const StudentDetails = (props) => {
  // const [jingalalll] = props;
  const StudentDetails = [
    { regNo: "1", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "2", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "3", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "4", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "5", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "6", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "7", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "8", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
    { regNo: "9", name: "name", dob: "02-12-1994", department: "IT", gender: "male" },
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