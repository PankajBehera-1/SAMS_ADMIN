import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
// import TableProfessors from './tableProfessors'
import Cards from './card'
import { Grid } from '@mui/material'
import StudentData from './studentData'

const ViewDashboard = () => {
  return (
    <>
      <ResponsiveDrawer />

      <Grid container direction="row" lg={12}>
        <Grid item lg={12}>
          <Cards />
        </Grid>
        <Grid item lg={12}>
          <StudentData />
        </Grid>
      </Grid>
    </>
  )
}
export default ViewDashboard;