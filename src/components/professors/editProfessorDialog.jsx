
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { Grid } from '@mui/material';
import style from "../../common/css/Profesor.module.css";
import professor from "../../common/images/professoravtar1.jpg";
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';




const EditProfessorDialog = (props) => {
  const [studentData, setStudentData] = useState({
    prof_emp_id: '',
    prof_f_name: '',
    prof_m_name: '',
    prof_l_name: '',
    prof_gen: '',
    prof_dob: '',
    prof_do_join: '',
    prof_city: '',
    prof_country: '',
    prof_state: '',
    prof_dist: '',
    prof_post: '',
    prof_pin: '',
    prof_phone: '',
    prof_alt_phone: '',
    prof_adds: '',
    prof_edu: '',
    prof_qualification: '',
    prof_position: '',
    prof_sal: '',
    prof_photo: ''


  })
  const handleInputeChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevFromDate) => ({
      ...prevFromDate,
      [name]: value
    }));
  };
  const { openEditDialog, handleCloseEditDialog } = props
  return (
    <>
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog} fullScreen >

        <DialogContent >

          <Grid className={style.Professor}>
            <Grid style={{ marginLeft: "80vw" }}>
              <CloseIcon onClick={handleCloseEditDialog} />
            </Grid>


            <Grid className={style.page1}>
              <h2>Add Professor</h2>
              <Grid className={style.id}>
                <p>
                  Employee ID<span>*</span>
                </p>
                <label className={style.EmployeeId}>
                  <input type="text" placeholder="Enter Employee ID"
                    name="prof_emp_id"
                    value={studentData.prof_emp_id}
                    onChange={handleInputeChange}
                  ></input>
                </label>
              </Grid>

              <Grid className={style.profilePic}>
                <img src={professor} alt='profile'></img>
                <Grid className={style.passportPhoto}>
                  <input type='file' id='inputTag' accept='image/*'
                    name="prof_photo"
                    value={studentData.prof_photo}
                    onChange={handleInputeChange}
                  ></input>
                  <p>
                    <span><label for="inputTag">Upload</label></span>
                    "Passport Size Photo"
                    <span className={style.photo}>*</span>
                  </p>
                </Grid>

              </Grid>
            </Grid>

            <Grid className={style.hrx}>
              <hr />
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
                    <input type="text" placeholder="Enter First Name"
                      name="prof_f_name"
                      value={studentData.prof_f_name}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Gender<span>*</span>
                  </p>
                  <label>
                    <select className={style.gen}
                      name="prof_gen"
                      value={studentData.prof_gen}
                      onChange={handleInputeChange}
                    >
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
                    <input type="text" placeholder="Enter Middle Name"
                      name="prof_m_name"
                      value={studentData.prof_m_name}
                      onChange={handleInputeChange}
                    ></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    DOB<span>*</span>
                  </p>
                  <label>
                    <input type="date"
                      name="prof_dob"
                      value={studentData.prof_dob}
                      onChange={handleInputeChange}></input>
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
                    <input type="text" placeholder="Enter Last Name"
                      name="prof_l_name"
                      value={studentData.prof_l_name}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Date Of Joinning<span>*</span>
                  </p>
                  <label>
                    <input type="date"
                      name="prof_do_join"
                      value={studentData.prof_do_join}
                      onChange={handleInputeChange}
                    ></input>
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
                    <input type="text" placeholder="Enter City/Village"
                      name="prof_city"
                      value={studentData.prof_city}
                      onChange={handleInputeChange}
                    ></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Dist<span>*</span>
                  </p>
                  <label>
                    <input type="text" placeholder="Enter  Distric"
                      name="prof_dist"
                      value={studentData.prof_dist}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Phone Number<span>*</span>
                  </p>
                  <label>
                    <input type="number" placeholder="Enter Phone Number"
                      name="prof_phone"
                      value={studentData.prof_phone}
                      onChange={handleInputeChange}></input>
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
                    <input type="text" placeholder="Enter state"
                      name="prof_state"
                      value={studentData.prof_state}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Post<span>*</span>
                  </p>
                  <label>
                    <input type="text" placeholder="Enter Post"
                      name="prof_post"
                      value={studentData.prof_post}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Alternative Phone No.<span>*</span>
                  </p>
                  <label>
                    <input type="number" placeholder="Enter Alt no."
                      name="prof_alt_phone"
                      value={studentData.prof_alt_phone}
                      onChange={handleInputeChange}></input>
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
                    <input type="text" placeholder="country"
                      name="prof_country"
                      value={studentData.prof_country}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Pin Code<span>*</span>
                  </p>
                  <label>
                    <input type="number" placeholder="pin code"
                      name="prof_pin"
                      value={studentData.prof_pin}
                      onChange={handleInputeChange}></input>
                  </label>
                </Grid>
                <Grid className={style.box}>
                  {" "}
                  <p>
                    Email<span>*</span>
                  </p>
                  <label>
                    <input type="email" placeholder="Email"></input>
                  </label>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={style.address}>
              <p>Address <span>*</span></p>
              <textarea placeholder="Enter Address"
                name="prof_adds"
                value={studentData.prof_adds}
                onChange={handleInputeChange}></textarea>
            </Grid>

            <h3 className={style.info}>Programe/Course Information</h3>

            <Grid className={style.course}>
              {" "}
              <p>
                Education<span>*</span>
              </p>
              <label>
                <select className={style.SelectCourse}
                  name="prof_edu"
                  value={studentData.prof_edu}
                  onChange={handleInputeChange}>
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
                  <input type="text" placeholder="Enter Qualification"
                    name="prof_qualification"
                    value={studentData.prof_qualification}
                    onChange={handleInputeChange}></input>
                </label>
              </Grid>
              <Grid className={style.third}>
                <p>
                  Position<span>*</span>
                </p>
                <select className={style.position}
                  name="prof_position"
                  value={studentData.prof_position}
                  onChange={handleInputeChange}>
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
                <input type="number" placeholder="Enter Salary Per Month"
                  name="prof_sal"
                  value={studentData.prof_sal}
                  onChange={handleInputeChange}></input>
              </Grid>
            </Grid>
            <a className={style.submit} href='#'>
              <button onClick={handleCloseEditDialog}>SUBMIT</button>
            </a>

          </Grid>

        </DialogContent >



      </Dialog>
    </>
  )
}

export default EditProfessorDialog