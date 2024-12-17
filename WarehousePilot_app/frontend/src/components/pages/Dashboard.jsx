import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout';
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };


  return (
    <div>
      <Layout/>
      {/* Update with metrics cards 
       */}
<h1> hello </h1>
    </div>
  );
}

export default Dashboard;