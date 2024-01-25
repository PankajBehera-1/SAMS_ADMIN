import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "../components/admission/index";
import Dashboard from "../components/dashboard/index";
import Professors from "../components/professors/index";
import Notice from "../components/notice/index";
import Registration from "../components/registration/index";
import Gallery from "../components/gallery/index";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
