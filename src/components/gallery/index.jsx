import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../../common/sidebar";
import { Grid, Button, Modal, Paper, Card, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {  Edit, Delete} from '@mui/icons-material'; // Import MUI icons
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // New state for delete confirmation
  const [editId, setEditId] = useState(null); // State variable for editing

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCloses = () => {
    setOpen(false);
    setPreview(null);
    // Close the modal
  };

  const handleSubmit = () => {
    if (image) {
      // Generate a unique id for the new image
      const newId =
        editId || (data.length > 0 ? data[data.length - 1].id + 1 : 1);
      const updatedData = [...data];
      const editedIndex = updatedData.findIndex((item) => item.id === editId);

      if (editedIndex !== -1) {
        // Update existing image
        updatedData[editedIndex] = {
          ...updatedData[editedIndex],
          type: age,
          preview: preview,
        };
      } else {
        // Add new image
        updatedData.push({
          id: newId,
          name: "New Image",
          type: age,
          preview: preview,
        });
      }

      setData(updatedData);

      // Reset form fields and close the modal
      setEditId(null);
      setAge("");
      setImage(null);
      setPreview(null);
      setOpen(false);
    } // Logic to handle form submission goes here
  };

  const [data, setData] = useState([
    {
      id: 1,
      name: "Image 1",
      type: "Cultural",
      preview: "path_to_image_1.jpg",
    },
    { id: 2, name: "Image 2", type: "Sports", preview: "path_to_image_2.jpg" },
    // Add more data as needed
  ]);

  const handleEdit = (id) => {
    const editImage = data.find((item) => item.id === id);
    setEditId(id);
    setAge(editImage.type);
    setPreview(editImage.preview);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id); // Set the deleteId state to the id of the item to be deleted
    setShowDeleteConfirmation(true); // Show delete confirmation popup
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== deleteId)); // Filter out the item to be deleted
    setShowDeleteConfirmation(false); // Close the confirmation modal
  };

  const cancelDelete = () => {
    setDeleteId(null); // Reset deleteId state
    setShowDeleteConfirmation(false); // Close the confirmation modal
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of items per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Grid>
      <ResponsiveDrawer />
      <Grid
        style={{
          color: "black",
          marginTop: "6%",
          marginLeft: "17%",
          fontSize: "2.2rem",
          fontFamily: "monospace",
          marginRight: "1.5%",
          marginBottom: "1%",
        }}
      >
        <h3>Gallery</h3>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button
          startIcon={<AddCircleIcon />}
          style={{
            backgroundColor: "rgb(255, 144, 24)",
            color: "white",
            marginTop: "-1.3%",
            marginRight: "3%",
            marginBottom: "2%",
          }}
          onClick={handleOpen}
        >
          Add Image
        </Button>
      </Grid>

      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginLeft: "21%",
          marginTop: "2%",
          marginRight: "1.5%",
          width: "70%",
          gap: "30%",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "#000" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Sl. No.</TableCell>
                <TableCell sx={{ color: "white" }}>Image Name</TableCell>
                <TableCell sx={{ color: "white" }}>Image Type</TableCell>
                <TableCell sx={{ color: "white" }}>Image Preview</TableCell>
                <TableCell sx={{ color: "white" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>
                    <img
                      src={row.preview}
                      alt={`Preview ${row.name}`}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Edit
                      onClick={() => handleEdit(row.id)}
                      style={{
                        color: "purple",
                        width: "20%",
                        cursor: "pointer",
                        marginRight: "8%",
                      }}
                    />
                    <Delete
                      onClick={() => handleDelete(row.id)}
                      style={{
                        color: "red",
                        width: "20%",
                        cursor: "pointer",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Paper
          style={{
            margin: "auto",
            marginTop: "10%",
            maxWidth: 400,
            padding: 20,
          }}
        >
          <Card>
            <Grid
              container
              direction="row"
              lg={12}
              style={{ padding: "3%", width: "100%" }}
            >
              <Grid
                item
                lg={12}
                style={{ marginTop: "2%", marginBottom: "2%", width: "100%" }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Image Name"
                />
              </Grid>
              <Grid
                item
                lg={12}
                style={{ marginTop: "2%", marginBottom: "2%" }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Image type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Cultural</MenuItem>
                    <MenuItem value={20}>Sports</MenuItem>
                    <MenuItem value={30}>Events</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                lg={12}
                style={{ marginTop: "2%", marginBottom: "2%" }}
              >
                <h2>Image Upload</h2>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {preview && (
                  <div>
                    <h3>Preview:</h3>
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
              </Grid>
              <Grid
                item
                lg={12}
                style={{
                  marginTop: "2%",
                  marginBottom: "2%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloses}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Modal>

      <Modal open={showDeleteConfirmation} onClose={cancelDelete}>
        <Paper
          style={{
            margin: "auto",
            marginTop: "10%",
            maxWidth: 400,
            padding: 20,
          }}
        >
          <Card>
            <Grid
              container
              direction="row"
              lg={12}
              style={{ padding: "3%", width: "100%" }}
            >
              <Grid
                item
                lg={12}
                style={{ marginTop: "2%", marginBottom: "2%", width: "100%" }}
              >
                <Typography variant="h6">
                  Are you sure you want to delete this item?
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                style={{
                  marginTop: "2%",
                  marginBottom: "2%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={confirmDelete}
                >
                  Yes
                </Button>
                <Button variant="contained" onClick={cancelDelete}>
                  No
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Modal>
    </Grid>
  );
};

export default Gallery;
