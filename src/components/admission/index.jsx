import React from "react";
import Sidebar from "../../common/sidebar";
import { Grid } from "@mui/material";
import style from "../../common/css/admission.module.css";
import image from "../../common/images/admission.png";

const Admission = () => {
  return (
    <>
      <Sidebar />
      <Grid className={style.fullpage}>
        <h2>Add Student</h2>
        <Grid className={style.registration}>
          <p>
            Registration No.<span>*</span>
          </p>
          <input type="text" placeholder="Enter Registration No."></input>
        </Grid>

        <Grid className={style.uploadphoto}>
          <input
            type="file"
            id="inputTag"
            accept="image/*"
            name="image"
          ></input>
          <p>
            <span>
              <label for="inputTag">Upload</label>
            </span>
            "passport size photo"
            <span className={style.star}>*</span>
          </p>
        </Grid>

        <hr class={style.hr}></hr>
        <h4>Personal Informations</h4>

        <Grid className={style.container}>
          <Grid className={style.firstcoloumn}>
            <Grid className={style.name}>
              <p>
                First Name<span>*</span>
              </p>
              <input type="text" placeholder="Enter First name"></input>
            </Grid>

            <Grid className={style.name}>
              <p>
                Gender<span>*</span>
              </p>
              <select type="select" name="gender" placeholder="Select">
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
              <input type="text" placeholder="Enter Father's  name"></input>
            </Grid>
          </Grid>

          <Grid className={style.secondrow}>
            <Grid className={style.name}>
              <p>Middle Name</p>
              <input type="text" placeholder="Enter Middle name"></input>
            </Grid>

            <Grid className={style.name}>
              <p>
                DOB<span>*</span>
              </p>
              <input type="date"></input>
            </Grid>

            <Grid className={style.name}>
              <p>Mother's Name</p>
              <input type="text" placeholder="Enter Mother's name"></input>
            </Grid>
          </Grid>

          <Grid className={style.thirdcoloumn}>
            <Grid className={style.name}>
              <p>
                Last Name<span>*</span>
              </p>
              <input type="text" placeholder="Enter Last name"></input>
            </Grid>

            <Grid className={style.name}>
              <p>
                Category<span>*</span>
              </p>
              <select type="select" name="category" placeholder="Select">
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
              <select type="select" name="religion" placeholder="Select">
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
              <input type="text" placeholder="Enter City/Village"></input>
            </Grid>

            <Grid className={style.name}>
              <p>
                Dist<span>*</span>
              </p>
              <input type="text" placeholder="Enter Distric"></input>
            </Grid>
            <Grid className={style.name}>
              <p>
                Phone No<span>*</span>
              </p>
              <input type="number" placeholder="Enter Phone No."></input>
            </Grid>
          </Grid>

          <Grid className={style.fifthcoloumn}>
            <Grid className={style.name}>
              <p>
                State<span>*</span>
              </p>
              <input type="text" placeholder="Enter State Name."></input>
            </Grid>
            <Grid className={style.name}>
              <p>
                Post<span>*</span>
              </p>
              <input type="text" placeholder="Enter post."></input>
            </Grid>
            <Grid className={style.name}>
              <p>
                Alternative Phone No<span>*</span>
              </p>
              <input type="number" placeholder="Enter Alt Phone No."></input>
            </Grid>
          </Grid>

          <Grid className={style.sixthcoloumn}>
            <Grid className={style.name}>
              <p>
                country<span>*</span>
              </p>
              <input type="text" placeholder="Enter Country Name."></input>
            </Grid>
            <Grid className={style.name}>
              <p>
                Pin Code<span>*</span>
              </p>
              <input type="number" placeholder="Enter Pin Code."></input>
            </Grid>

            <Grid className={style.name}>
              <p>
                Parent's Phone No<span>*</span>
              </p>
              <input type="text" placeholder="Parent's Phone No."></input>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={style.email}>
          <p>
            Email Id<span>*</span>
          </p>
          <input type="email" placeholder=" Enter Email Id"></input>
        </Grid>

        <Grid className={style.adress}>
          <p>
            Permanent Adress<span>*</span>
          </p>
          <textarea
            type="text"
            placeholder="Enter Permanent Address"
          ></textarea>
        </Grid>

        <Grid className={style.thirdblueborder} blue>
          <h4>Programme/Course Information</h4>
        </Grid>

        <Grid className={style.education}>
          <p>
            Education<span>*</span>
          </p>
          <select type="select" name="education" id="education">
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
            <input type="number" placeholder="Example 2020-2024"></input>
          </Grid>

          <Grid className={style.selectname}>
            <p>
              Status<span>*</span>
            </p>
            <select type="select" name="status" placeholder="Select">
              <option value="">Select</option>
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
            ></input>
          </Grid>
        </Grid>

        <button type="submit">Submit</button>

        <Grid className={style.image}>
          <img src={image} alt="image" />
        </Grid>
      </Grid>
    </>
  );
};

export default Admission;
