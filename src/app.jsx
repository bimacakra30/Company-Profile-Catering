import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import AdminPanel from "./Components/AdminPanel/AdminPanel.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
