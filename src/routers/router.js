import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/index";
import Noticeboard from "../components/noticeboard/index";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/noticeboard" element={<Noticeboard />}/>

      </Routes>
    </Router>
  );
};

export default AppRouter;
