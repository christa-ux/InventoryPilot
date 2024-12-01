import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/authentication';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
