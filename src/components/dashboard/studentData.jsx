import React from 'react'
import ResponsiveDrawer from '../../common/sidebar'
import { Grid, Paper, Typography } from '@mui/material'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentData = () => {
  const rows = [
    { regNo: '001', year: 2020, email: 'example1@example.com', mobileNo: '123-456-7890' },
    { regNo: '002', year: 2019, email: 'example2@example.com', mobileNo: '234-567-8901' },
    { regNo: '003', year: 2021, email: 'example3@example.com', mobileNo: '345-678-9012' },
    { regNo: '004', year: 2018, email: 'example4@example.com', mobileNo: '456-789-0123' }
  ];

  const handleCall = (value) => {
    console.log(value)
  }
  return (
    <>
      <ResponsiveDrawer />
      <Paper sx={{ width: "70%", ml: 45, backgroundColor: "#e8eaf6" }}>
        <Grid container direction="row" lg={12} >

          <Grid item lg={6} sx={{ padding: 2 }}>
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>Btech Students</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index} hover onClick={()=>{handleCall(row)}} style={{cursor:'pointer'}} >
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={6} sx={{ padding: 2 }}> 
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>MBA Students</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={6} sx={{ padding: 2 }}>
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>MCA Students</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>



          <Grid item lg={6} sx={{ padding: 2 }}>
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>Mtech Students</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={6} sx={{ padding: 2 }}>
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>Request Approved</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={6} sx={{ padding: 2 }}>
            <Paper>
              <TableContainer>
                <Grid item sx={{ ml: 1, mt: 2, mb: -1 }}>
                  <Typography variant="h6" gutterBottom>Request Pending</Typography>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No.</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                      <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile No.</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.regNo}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.mobileNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid sx={{ display: 'flex', justifyContent: 'right', margin:'1vw 1vw 1vw' }}>
                <Link href="#" >ViewAll..</Link>
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </Paper>

    </>
  )
}

export default StudentData