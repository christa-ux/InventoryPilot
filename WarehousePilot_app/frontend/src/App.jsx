import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login} from './components/authentication';
import { AdminDashboard, Dashboard, ManagerDashboard } from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/manager_dashboard" element={<ManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;