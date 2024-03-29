import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "../components/admission/index";
import Dashboard from "../components/dashboard/index";
import Noticeboard from "../components/noticeboard/index";
import AddProfessors from "../components/professors/addProfessors";
import ViewProfessors from "../components/professors/viewProfessors";
// import Notice from "../components/notice/index";
import StudentDetails from "../components/registration/studentDetails";
import Gallery from "../components/gallery/index";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        
    

        <Route path="/" element={<Dashboard />} />
        
        <Route path="/admission" element={<Admission />} />
        <Route path="/add_professors" element={<AddProfessors />} />
        <Route path="/view_professors" element={<ViewProfessors />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/student" element={<StudentDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
