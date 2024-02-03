import React, { useState } from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    TablePagination,
    Typography,
    Paper,
    IconButton,
    TableContainer,
    InputBase,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from '@mui/material';
import { Visibility, Edit, Delete, FilterList } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Img from "../../common/images/profile.png";
import ViewStudentModal from './viewStudentModal';
import DeleteStudentDialog from './deleteStudentDialog';
import EditStudentDialog from './editStudentDialog';

const StudentTable = (props) => {
    const { data } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [selectedProfessor, setSelectedProfessor] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        requestApproved: false,
        requestPending: false,
        year: "",
        department: "",
    });

    const handleOpenDialog = (dialogType) => {
        switch (dialogType) {
            case 'edit':
                setOpenEditDialog(true);
                break;
            case 'delete':
                setOpenDeleteDialog(true);
                break;
            default:
                break;
        }
    };

    const handleCloseDialog = (dialogType) => {
        switch (dialogType) {
            case 'edit':
                setOpenEditDialog(false);
                break;
            case 'delete':
                setOpenDeleteDialog(false);
                break;
            default:
                break;
        }
    };

    const handleOpenViewModal = (professor) => {
        setSelectedProfessor(professor);
        setOpenViewModal(true);
    };

    const handleCloseViewModal = () => {
        setOpenViewModal(false);
    };

    const handleDownloadConfirmation = () => {
        try {
            const professorData = JSON.stringify(selectedProfessor);
            const blob = new Blob([professorData], { type: 'application/json' });
            const anchor = document.createElement('a');
            anchor.download = `professor_details_${selectedProfessor.regNo}.json`;
            anchor.href = window.URL.createObjectURL(blob);
            anchor.click();
            window.URL.revokeObjectURL(anchor.href);
            handleCloseViewModal();
        } catch (error) {
            console.error("Error generating JSON:", error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const totalRows = 100; // Replace with the actual count of your data

    const filteredProfessors = data.filter((professor) => {
        // Apply search filter
        const isMatchingSearchQuery = professor.regNo.toLowerCase().includes(searchQuery.toLowerCase());
        // Apply other filters
        const isMatchingFilters = Object.keys(filters).every((filterType) => {
            if (filterType === "requestApproved") {
                return !filters.requestApproved || professor.requestApproved === filters.requestApproved;
            } else if (filterType === "requestPending") {
                return !filters.requestPending || professor.requestPending === filters.requestPending;
            } else if (filterType === "year") {
                return !filters.year || professor.year === filters.year;
            } else if (filterType === "department") {
                return !filters.department || professor.department === filters.department;
            }
            return true;
        });
        return isMatchingSearchQuery && isMatchingFilters;
    });

    return (
        <Paper>
            <Grid container lg={12} style={{ marginLeft: "18%" }}>
                <Grid item style={{ width: "80%", position: "absolute" }}>
                    <Grid>
                        <TableContainer component={Paper} sx={{ mb: 5 }}>
                            <Grid container direction="row" lg={12} style={{ display: "flex", marginBottom: "1%" }}>
                                <Grid item sx={{ ml: 1, mt: 2, mb: -1, mr:3 }}>
                                    <Typography variant="h6" gutterBottom>All Students</Typography>
                                </Grid>
                                <Grid item sx={{ width: "10%", mt: 1 }}>
                                    <IconButton aria-label="filter" sx={{ p: '10px' }} onClick={() => setFilters({ ...filters, filter: !filters.filter })}>
                                        <FilterList />
                                    </IconButton>
                                </Grid>
                                {filters.filter && (
                                    <>
                                        <Grid item sx={{ width: "10%", mt: 1, ml:-5 }}>
                                            <FormControl fullWidth>
                                            <InputLabel id="request">Request</InputLabel>
                                                <Select
                                                    value={filters.requestApproved}
                                                    label="Request"
                                                    onChange={(event) => handleFilterChange('requestApproved', event.target.value)}
                                                >
                                                    <MenuItem value="">Request</MenuItem>
                                                    <MenuItem value="requestApproved">Request Approved</MenuItem>
                                                    <MenuItem value="requestApproved">Request Pending</MenuItem>
                                                    
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        
                                        <Grid item sx={{ width: "10%", mt:1, mr:1, ml:1 }}>
                                            <FormControl fullWidth>
                                            <InputLabel id="request">Year</InputLabel>
                                                <Select
                                                    value={filters.year}
                                                    label="Year"
                                                    onChange={(event) => handleFilterChange('year', event.target.value)}
                                                >
                                                    <MenuItem value="">Year</MenuItem>
                                                    {[...Array(new Date().getFullYear() - 2000).keys()].map((year) => (
                                                        <MenuItem key={year} value={2000 + year}>{2000 + year}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item sx={{ width: "10%", mt: 1 }}>
                                            <FormControl fullWidth>
                                            <InputLabel id="request">Department</InputLabel>
                                                <Select
                                                    value={filters.department}
                                                    label="Department"
                                                    onChange={(event) => handleFilterChange('department', event.target.value)}
                                                >
                                                    <MenuItem value="">Department</MenuItem>
                                                    <MenuItem value="btech">B.Tech</MenuItem>
                                                    <MenuItem value="mtech">M.Tech</MenuItem>
                                                    <MenuItem value="mba">MBA</MenuItem>
                                                    <MenuItem value="mca">MCA</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </>
                                )}
                                <Grid item sx={{ width: "10%", mt: 1 , ml:100, position:"fixed"}}>
                                    <Paper
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search Registration Number"
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                            onChange={handleSearchInputChange}
                                        />
                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Reg No</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Year</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Name</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Email</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>DOB</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Mobile</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Department</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Gender</TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: "white" }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredProfessors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((professor, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{professor.regNo}</TableCell>
                                            <TableCell>{professor.year}</TableCell>
                                            <TableCell>{professor.name}</TableCell>
                                            <TableCell>{professor.email}</TableCell>
                                            <TableCell>{professor.dob}</TableCell>
                                            <TableCell>{professor.mobile}</TableCell>
                                            <TableCell>{professor.department}</TableCell>
                                            <TableCell>{professor.gender}</TableCell>
                                            <TableCell sx={{ display: "flex", spacing: "6" }}>
                                                <Visibility sx={{ padding: "1px" }} color="primary" onClick={() => handleOpenViewModal(professor)} />
                                                <Edit sx={{ padding: "1px", margin: "0 15px 0 15px" }} color="secondary" onClick={() => handleOpenDialog('edit')} />
                                                <Delete sx={{ padding: "1px" }} color="error" onClick={() => handleOpenDialog('delete')} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[8, 10, 25]}
                                component="div"
                                count={totalRows}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangeRowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableContainer>
                    </Grid>
                </Grid>
                <EditStudentDialog
                    openEditDialog={openEditDialog}
                    handleCloseEditDial={() => handleCloseDialog('edit')}
                />
                <DeleteStudentDialog
                    openDeleteDialog={openDeleteDialog}
                    handleCloseDeleteDialog={() => handleCloseDialog('delete')}
                />
                <ViewStudentModal
                    Img={Img}
                    selectedProfessor={selectedProfessor}
                    openViewModal={openViewModal}
                    handleCloseViewModal={handleCloseViewModal}
                    handleDownloadConfirmation={handleDownloadConfirmation}
                />
            </Grid>
        </Paper>
    );
};

export default StudentTable;
