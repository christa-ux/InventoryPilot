import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import Dashboard from "./components/pages/Dashboard"; 
import "./components/style/global.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
