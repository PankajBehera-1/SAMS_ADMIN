import React from "react";
import ResponsiveDrawer from "../../common/sidebar";
import { Grid } from "@mui/material";

import Typography from "@mui/material/Typography";

const Registrations = () => {
  return (
    <>
      <ResponsiveDrawer />
      <Grid
        xs={12}
        sm={12}
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "18%",
          marginTop: "5%",
          maxWidth: "95%",
          marginRight: "2.2%",
        }}
      >
        <Grid container direction="row">
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "1.9rem" }}
          >
            Registration
          </Typography>

          <Grid item xs={12} sm={12} mb={2}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: "1.6rem",
                backgroundColor: "#133b65",
                color: "white",
                padding: "0.6%",
                marginTop: "2%",
              }}
            >
              General Information
            </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="firstName">First Name<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter First name"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="middleName">Middle Name</label>
              <br />
              <input
                type="text"
                id="middleName"
                name="middleName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Middle name"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="lastName">Last Name<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Last name"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} mb={2}>
              <label for="Gender">Gender<span style={{color:'red'}}>*</span></label>
              <br />

              <select
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
              >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </Grid>
            <Grid item xs={12} sm={6} mb={2}>
              <label for="DOB">DOB<span style={{color:'red'}}>*</span></label>
              <br />

              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={4} mb={2}>
              <label for="firstName">First name:</label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter your name"
              />
            </Grid> */}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="fatherName">Father Name<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Father name"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="motherName">Mother Name<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="motherName"
                name="motherName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Mother name"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="guardianName">Guardian Name:</label>
              <br />
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Guardian name"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} mb={2}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: "1.6rem",
                backgroundColor: "#133b65",
                color: "white",
                padding: "0.6%",
                marginTop: "2%",
              }}
            >
              Personal Information
            </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="phoneNo">Phone No<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="number"
                id="phoneNo"
                name="phoneNo"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Phone no"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="whatsAppNo">WhatsApp No<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="number"
                id="whatsAppNo"
                name="whatsAppNo"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter WhatsApp no"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="emailId">Email Id<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="emailId"
                name="emailId"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Email id"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="fatherContactNo">Father Contact No<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="number"
                id="fatherContactNo"
                name="fatherContactNo"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Father Contact no"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="motherContactNo">Mother Contact No<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="number"
                id="motherContactNo"
                name="motherContactNo"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Mother Contact no"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={-1}>
              <label for="guardianNo">Guardian No</label>
              <br />
              <input
                type="number"
                id="guardianNo"
                name="guardianNo"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Guardian no"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} mb={2}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: "1.6rem",
                backgroundColor: "#133b65",
                color: "white",
                padding: "0.6%",
                marginTop: "2%",
              }}
            >
              Address
            </Typography>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="city">City/Village<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter City/Village"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="post">Post<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="post"
                name="post"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Post"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="dist">Dist<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="dist"
                name="dist"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter distric  "
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="state">State<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="state"
                name="state"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter State"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="country">Country<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="text"
                id="country"
                name="country"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter country"
              />
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <label for="pin">Pin<span style={{color:'red'}}>*</span></label>
              <br />
              <input
                type="number"
                id="pin"
                name="pin"
                required
                autocomplete="given-name"
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "2%",
                }}
                placeholder="Enter Pin"
              />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} mb={-1}>
              <label for="presentAddress">Present Address<span style={{color:'red'}}>*</span></label>
              <textarea
                id="presentAddress"
                name="presentAddress"
                rows="4"
                style={{
                  width: "100%",
                  height: "10vh",
                  borderRadius: "5px",
                  border: "1px solid #888686",
                  backgroundColor: "rgba(232,232,238,.433)",
                  fontSize: "15px",
                  padding: "1%",
                }}
                placeholder="Enter Present Address"
              ></textarea>

            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} mb={2}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: "1.6rem",
                backgroundColor: "#133b65",
                color: "white",
                padding: "0.6%",
                marginTop: "2%",
              }}
            >
              Document
            </Typography>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="photo">Passport Size Photo<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
            
            
             
            <Grid item xs={12} sm={4} mb={2}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="12th">12th Certificate<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} mb={2}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="12th">12th Marksheet<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={4} mb={2}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="10th">10th Certificate<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
          

<Grid item xs={12} sm={4} mb={2}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="aadhar">Aadhar Photo<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} mb={4}>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="migration">Migration Certificate<span style={{color:'red'}}>*</span></label>
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "5vh",
                    borderRadius: "5px",
                    border: "1px solid #888686",
                    backgroundColor: "rgba(232,232,238,.433)",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                />
              </form>
            </Grid>
            
          </Grid>
          <button
            style={{
              padding: "10px 30px 10px 30px",
              backgroundColor: "#133b65",
              fontSize: "1.2rem",
              borderRadius: "5px",
              display: "block",
              margin: "auto",
              marginBottom: "2%",
              color: "white",
              border: "none",
            }}
          >
            Register
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default Registrations;
