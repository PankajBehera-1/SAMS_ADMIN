import React from 'react'
import ResponsiveDrawer from "../../common/sidebar";
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Gallery = () => {
  return (
    <>
    <ResponsiveDrawer />
    <Grid style={{ display: 'flex', alignItems: 'center',marginLeft:'16.5%', marginTop: '5%' }}>
      
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          GALLERY PORTAL
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </>
  )
}

export default Gallery