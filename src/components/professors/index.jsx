import React from 'react'
import ResponsiveDrawer from "../../common/sidebar";
import { Grid, colors } from '@mui/material';
import style from "../../common/css/Profesor.module.css";

import profile from "../../common/images/profile.png";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Professors = () => {

  return (
    <>
      <ResponsiveDrawer />
      
        
        {/* <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            PROFESSOR PORTAL
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}

<Grid className={style.Professor}>
  <Grid className={style.page1}>
     <h2>Add Professor</h2>
        <Grid className={style.id}>
          <p>
            Employee ID<span>*</span>
          </p>
          <label className={style.EmployeeId}>
            <input type="text" placeholder="Enter Employee ID"></input>
          </label>
        </Grid>
        <Grid className={style.profilePic}>
          <img src={profile} alt='profile'></img>
          <Grid className={style.passportPhoto}>
            <input type='file' id='inputTag'accept='image/*' name='image'></input>
          <p>
            <span><label for="inputTag">Upload</label></span>
            "Passport Size Photo"
            <span className={style.photo}>*</span>
          </p>
          </Grid>
          
        </Grid>
  </Grid>
       
        <Grid className={style.hrx}>
            <hr  />
        </Grid>
        
        <h3 className={style.info}>Personal Informations</h3>
        <Grid className={style.firstSection}>
          <Grid className={style.minisec1}>
           
            <Grid className={style.box} > 
              {" "}
              <p>
                First Name<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter First Name"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Gender<span>*</span>
              </p>
              <label>
                <select className={style.gen}>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Femake</option>
                  <option>Other</option>
                </select>
              </label>
            </Grid>
          </Grid>
          <Grid className={style.minisec1}>
            <Grid className={style.box}>
              {" "}
              <p>Middle Name</p>
              <label>
                <input type="text" placeholder="Enter Middle Name"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                DOB<span>*</span>
              </p>
              <label>
                <input type="date"></input>
              </label>
            </Grid>
          </Grid>
          <Grid className={style.minisec1}>
            <Grid className={style.box}>
              {" "}
              <p>
                Last Name<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter Last Name"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Date Of Joinning<span>*</span>
              </p>
              <label>
                <input type="date"></input>
              </label>
            </Grid>
          </Grid>
        </Grid>

        <h3 className={style.info}>Contact Informations/Address</h3>

        <Grid className={style.firstSection}>
          <Grid className={style.minisec1}>
            <Grid className={style.box}>
              {" "}
              <p>
                City/Village<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter City/Village"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Dist<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter  Distric"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Phone Number<span>*</span>
              </p>
              <label>
                <input type="number" placeholder="Enter Phone Number"></input>
              </label>
            </Grid>
          </Grid>

          <Grid className={style.minisec1}>
            <Grid className={style.box}>
              {" "}
              <p>
                State<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter state"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Post<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter Post"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Alternative Phone No.<span>*</span>
              </p>
              <label>
                <input type="number" placeholder="Enter Alt no."></input>
              </label>
            </Grid>
          </Grid>
          <Grid className={style.minisec1}>
            <Grid className={style.box}>
              {" "}
              <p>
                Country<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter Employee ID"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Pin Code<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter Employee ID"></input>
              </label>
            </Grid>
            <Grid className={style.box}>
              {" "}
              <p>
                Email<span>*</span>
              </p>
              <label>
                <input type="text" placeholder="Enter Employee ID"></input>
              </label>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={style.address}>
          <p>Address <span>*</span></p>
          <textarea placeholder="Enter Parmanent Address"></textarea>
        </Grid>

        <h3 className={style.info}>Programe/Course Information</h3>

        <Grid className={style.course}>
          {" "}
          <p>
            Education<span>*</span>
          </p>
          <label>
            <select className={style.SelectCourse}>
              <option>Select an course</option>
              <option>Diploma</option>
              <option>B-tech</option>
              <option>M-tech</option>
              <option>MBA</option>
            </select>
          </label>
        </Grid>

        <Grid className={style.CourseSelect}>
          <Grid className={style.third}>
            <p>
              Qualification<span>*</span>
            </p>
            <label>
              <input type="text" placeholder="Enter Qualification"></input>
            </label>
          </Grid>
          <Grid className={style.third}>
            <p>
              Position<span>*</span>
            </p>
            <select className={style.position}>
              <option>Select</option>
              <option>HOD</option>
              <option>Assist.HOD</option>
              <option>Sr.Professor</option>
              <option>Jr.Professor</option>
              <option>Other</option>
            </select>
          </Grid>
          <Grid className={style.third}>
            <p>
              Salary<span>*</span>
            </p>
            <input type="number" placeholder="Enter Salary Per Month"></input>
          </Grid>
        </Grid>
        <a className={style.submit} href='#'>
        <button >SUBMIT</button>
        </a>
        
      </Grid>
     
    </>
  )
}

export default Professors