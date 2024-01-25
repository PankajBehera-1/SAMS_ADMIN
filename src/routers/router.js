import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "../components/admission/index";
import Dashboard from "../components/dashboard/index";
import Professors from "../components/professors/index";
import Notice from "../components/notice/index";
import Registration from "../components/registration/index";
import Gallery from "../components/gallery/index";
import ResponsiveDrawer from "../../src/common/sidebar";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ResponsiveDrawer><Dashboard /><ResponsiveDrawer /></ResponsiveDrawer>} />
        <Route path="/admission" element={<ResponsiveDrawer> <Admission /><ResponsiveDrawer /></ResponsiveDrawer>} />
        <Route path="/professors" element={<ResponsiveDrawer> <Professors /><ResponsiveDrawer /></ResponsiveDrawer>} />
        <Route path="/notice" element={<ResponsiveDrawer> <Notice/><ResponsiveDrawer /></ResponsiveDrawer>} />
        <Route path="/registration" element={<ResponsiveDrawer> <Registration /><ResponsiveDrawer /></ResponsiveDrawer>} />
        <Route path="/gallery" element={<ResponsiveDrawer> <Gallery /><ResponsiveDrawer /></ResponsiveDrawer>} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
