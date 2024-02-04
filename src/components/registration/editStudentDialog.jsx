import { Dialog, DialogContent, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import style from "../../common/css/admission.module.css";
import avtar from "../../common/images/graduated.png";

const EditStudentDialog = (props) => {
  const { openEditDialog, handleCloseEditDialog } = props;
  const [studentData, setstudentData] = useState({
    std_regNo: "",
    std_f_name: "",
    std_m_name: "",
    std_l_name: "",
    std_gen: "",
    std_dob: "",
    std_categ: "",
    std_dad_name: "",
    std_mom_name: "",
    std_religion: "",
    std_city: "",
    std_state: "",
    std_country: "",
    std_dist: "",
    std_post: "",
    std_pin: "",
    std_phone: "",
    std_alt_phone: "",
    std_parant_number: "",
    std_email: "",
    std_per_adres: "",
    std_edu: "",
    std_passyear: "",
    std_status: "",
    std_coursefee: "",
    std_adhaar: "",
    std_10th_passyear: "",
    std_12th_passyear: "",
    std_10th_marksheet: "",
    std_10th_certificate: "",
    std_10th_percentage: "",
    std_12th_certificate: "",
    std_12th_marksheet: "",
    std_12th_percentage: "",

    std_photo: null,
  });

  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setstudentData((studentData) => ({
      ...studentData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Dialog for editing details */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog} fullScreen>
        {/* <DialogTitle>Edit Professor Details</DialogTitle> */}
        <DialogContent sx={{ width: "600vw%", height: "100vh" }}>
          <Grid className={style.fullpage}>
            <Grid sx={{ marginLeft: "85vw" }}>
              <CloseIcon onClick={handleCloseEditDialog} />
            </Grid>
            <Grid className={style.firstPage}>
              <Grid className={style.registration}>
                <h2>Add Student</h2>
                <p>
                  Registration No.<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Enter Registration No."
                  name="std_regNo"
                  value={studentData.std_regNo}
                  onChange={handleinputchange}
                ></input>
              </Grid>
              <Grid className={style.avtarpic}>
                <img src={avtar} alt="avtar"></img>

                <input
                  type="file"
                  id="inputTag"
                  accept="image/*"
                  // name="image"
                  name="std_photo"
                  value={studentData.std_photo}
                  onChange={handleinputchange}
                ></input>

                <p>
                  <span>
                    <label for="inputTag">Upload</label>
                  </span>
                  "passport size photo"
                  <span className={style.star}>*</span>
                </p>
              </Grid>
            </Grid>

            <hr class={style.hr}></hr>
            <h4>Personal Informations</h4>

            <Grid className={style.container}>
              <Grid className={style.firstcoloumn}>
                <Grid className={style.name}>
                  <p>
                    First Name<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter First name"
                    name="std_f_name"
                    value={studentData.std_f_name}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Gender<span>*</span>
                  </p>
                  <select
                    type="select"
                    // name="gender"
                    placeholder="Select"
                    name="std_gen"
                    value={studentData.std_gen}
                    onChange={handleinputchange}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Father's Name<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Father's name"
                    name="std_dad_name"
                    value={studentData.std_dad_name}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.secondrow}>
                <Grid className={style.name}>
                  <p>Middle Name</p>
                  <input
                    type="text"
                    placeholder="Enter Middle name"
                    name="std_m_name"
                    value={studentData.std_m_name}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    DOB<span>*</span>
                  </p>
                  <input
                    type="date"
                    name="std_dob"
                    value={studentData.std_dob}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>Mother's Name</p>
                  <input
                    type="text"
                    placeholder="Enter Mother's name"
                    name="std_mom_name"
                    value={studentData.std_mom_name}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.thirdcoloumn}>
                <Grid className={style.name}>
                  <p>
                    Last Name<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Last name"
                    name="std_l_name"
                    value={studentData.std_l_name}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Category<span>*</span>
                  </p>
                  <select
                    type="select"
                    placeholder="Select"
                    name="std_categ"
                    value={studentData.std_categ}
                    onChange={handleinputchange}
                  >
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Religion<span>*</span>
                  </p>
                  <select
                    type="select"
                    placeholder="Select"
                    name="std_religion"
                    value={studentData.std_religion}
                    onChange={handleinputchange}
                  >
                    <option value="">Select</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Christian">Christian</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Jain">Jain</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Others">Others</option>
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={style.secondblueborder} blue>
              <h4>Contact Informations/Address</h4>
            </Grid>

            <Grid className={style.secondcontainer}>
              <Grid className={style.fourthcoloumn}>
                <Grid className={style.name}>
                  <p>
                    City/Village<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter City/Village"
                    name="std_city"
                    value={studentData.std_city}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Dist<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Distric"
                    name="std_dist"
                    value={studentData.std_dist}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
                <Grid className={style.name}>
                  <p>
                    Phone No<span>*</span>
                  </p>
                  <input
                    type="number"
                    placeholder="Enter Phone No."
                    name="std_phone"
                    value={studentData.std_phone}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.fifthcoloumn}>
                <Grid className={style.name}>
                  <p>
                    State<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter State Name."
                    name="std_state"
                    value={studentData.std_state}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
                <Grid className={style.name}>
                  <p>
                    Post<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter post."
                    name="std_post"
                    value={studentData.std_post}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
                <Grid className={style.name}>
                  <p>
                    Alternative Phone No<span>*</span>
                  </p>
                  <input
                    type="number"
                    placeholder="Enter Alt Phone No."
                    name="std_alt_phone"
                    value={studentData.std_alt_phone}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.sixthcoloumn}>
                <Grid className={style.name}>
                  <p>
                    country<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Country Name."
                    name="std_country"
                    value={studentData.std_country}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
                <Grid className={style.name}>
                  <p>
                    Pin Code<span>*</span>
                  </p>
                  <input
                    type="number"
                    placeholder="Enter Pin Code."
                    name="std_pin"
                    value={studentData.std_pin}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    Parent's Phone No<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Parent's Phone No."
                    name="std_parant_number"
                    value={studentData.std_parant_number}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={style.email}>
              <p>
                Email Id<span>*</span>
              </p>
              <input
                type="email"
                placeholder=" Enter Email Id"
                name="std_email"
                value={studentData.std_email}
                onChange={handleinputchange}
              ></input>
            </Grid>

            <Grid className={style.adress}>
              <p>
                Adress<span>*</span>
              </p>
              <textarea
                type="text"
                placeholder="Enter Address"
                name="std_per_adres"
                value={studentData.std_per_adres}
                onChange={handleinputchange}
              ></textarea>
            </Grid>

            <Grid className={style.thirdblueborder} blue>
              <h4>Programme/Course Information</h4>
            </Grid>

            <Grid className={style.education}>
              <p>
                Education<span>*</span>
              </p>
              <select
                type="select"
                // name="education"
                id="education"
                name="std_edu"
                value={studentData.std_edu}
                onChange={handleinputchange}
              >
                <option value="">Select an education</option>
                <option value="Diploma">Diploma</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
              </select>
            </Grid>

            <Grid className={style.thirdcontainer}>
              <Grid className={style.name}>
                <p>
                  Pass Year<span>*</span>
                </p>
                <input
                  type="number"
                  placeholder="Example 2020-2024"
                  name="std_passyear"
                  value={studentData.std_passyear}
                  onChange={handleinputchange}
                ></input>
              </Grid>

              <Grid className={style.selectname}>
                <p>
                  Status<span>*</span>
                </p>

                <select
                  type="select"
                  name="std_status"
                  value={studentData.std_status}
                  onChange={handleinputchange}
                >
                  <option value="">select</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Day Scolar">Day Scolar</option>
                  <option value="Distance">Distance</option>
                </select>
              </Grid>
              <Grid className={style.coursename}>
                <p>
                  Course Fee(PA)<span>*</span>
                </p>
                <input
                  type="number"
                  placeholder="Enter course Fee per annum"
                  name="std_coursefee"
                  value={studentData.std_coursefee}
                  onChange={handleinputchange}
                ></input>
              </Grid>
            </Grid>

            <Grid className={style.secondblueborder} blue>
              <h4>Required Details</h4>
            </Grid>

            <Grid className={style.adhaar}>
              <p>
                Adhaar card<span>*</span>
              </p>
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="std_email"
                value={studentData.std_adhaar}
                onChange={handleinputchange}
              ></input>
            </Grid>

            <Grid className={style.container}>
              <Grid className={style.firstcoloumn}>
                <Grid className={style.name}>
                  <p>
                    10th Passing Year<span>*</span>
                  </p>
                  <input
                    type="number"
                    placeholder="2015-2018"
                    name="std_10th_passyear"
                    value={studentData.std_10th_passyear}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    12th Passing Year<span>*</span>
                  </p>
                  <input
                    type="number"
                    // name="gender"
                    placeholder="2018-2020"
                    name="std_12th_passyear"
                    value={studentData.std_12th_passyear}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    10th Marksheet<span>*</span>
                  </p>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="std_10th_marksheet"
                    value={studentData.std_10th_marksheet}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    10th Certificate<span>*</span>
                  </p>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="std_10th_certificate"
                    value={studentData.std_10th_certificate}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.secondrows}>
                <Grid className={style.name}>
                  <p>
                    10th Percentage
                    <span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="%"
                    name="std_10th_percentage"
                    value={studentData.std_10th_percentage}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    12th Percentage<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="%"
                    name="std_12th_percentage"
                    value={studentData.std_12th_percentage}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    12th Certificate<span>*</span>
                  </p>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="std_12th_certificate"
                    value={studentData.std_12th_certificate}
                    onChange={handleinputchange}
                  ></input>
                </Grid>

                <Grid className={style.name}>
                  <p>
                    12th Marksheet<span>*</span>
                  </p>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="std_12th_marksheet"
                    value={studentData.std_12th_marksheet}
                    onChange={handleinputchange}
                  ></input>
                </Grid>
              </Grid>

              <Grid className={style.thirdcoloumn}></Grid>
            </Grid>

            <Button sx={{ mt: 3, justifyContent: "center", backgroundColor: "blue", color: "white" }} type="submit" onClick={handleCloseEditDialog}>
              Submit
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditStudentDialog;
