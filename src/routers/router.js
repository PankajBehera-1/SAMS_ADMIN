import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "../components/admission/index";
import Dashboard from "../components/dashboard/index";
import AddProfessors from "../components/professors/addProfessors";
import ViewProfessors from "../components/professors/viewProfessors";
import Notice from "../components/notice/index";
import Registration from "../components/registration/index";
import Gallery from "../components/gallery/index";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/add_professors" element={<AddProfessors />} />
        <Route path="/view_professors" element={<ViewProfessors />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
