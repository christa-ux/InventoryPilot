import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login} from './components/authentication';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;