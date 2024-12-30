import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Typography, CircularProgress, Box, TextField } from '@mui/material';
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";
import axios from 'axios'; // Make sure axios is imported

const OrderListView = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [userData, setUserData] = useState(null); // User data state
  const [rows, setRows] = useState([]); // Rows data for DataGrid
  const [filteredRows, setFilteredRows] = useState([]); // Filtered rows state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const [searchText, setSearchText] = useState(""); // Search input state
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Define columns here
  const columns = [
    { field: 'order_id', headerName: 'Order ID', width: 150 },
    { field: 'estimated_duration', headerName: 'Estimated Duration', width: 150 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'due_date', headerName: 'Due Date', width: 200 },
  ];

  // Retrieve the current user's data
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, []);

  // Check that the user is an admin or redirect to the correct dashboard
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role !== "admin") {
        // Navigate to the correct dashboard based on role
        if (parsedUser.role === "manager") {
          navigate("/manager_dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } else {
      alert("Not logged in");
      navigate("/");
    }
  }, [navigate]);

  // Fetch order data from the backend
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authorization token is missing');
      setLoading(false);
      return;
    }

    fetch('http://127.0.0.1:8000/orders/ordersview/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRows(data.map(order => ({
            id: order.order_id, // Unique id for each row (required by DataGrid)
            order_id: order.order_id,
            estimated_duration: order.estimated_duration,
            status: order.status,
            due_date: order.due_date,
          })));
        } else {
          setError('Failed to fetch valid data');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch order data:', error);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  // Filter rows based on search text
  useEffect(() => {
    const filteredData = rows.filter(row => {
      return row.order_id.toString().includes(searchText) ||
             row.status?.toLowerCase().includes(searchText.toLowerCase()) ||
             row.estimated_duration?.toLowerCase().includes(searchText.toLowerCase()) ||
             row.due_date?.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRows(filteredData);
  }, [searchText, rows]);

  return (
    <div className="flex h-full">
      <Sidebar userData={userData} isOpen={isSidebarOpen} />
      
      <div className="flex-1 sm:ml-64">
        {/* Header */}
        <Header userData={userData} toggleSidebar={toggleSidebar} />

        <Box mt={10} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">View Orders</Typography>
          
          {/* Search Bar */}
          <TextField
            label="Search Orders"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            margin="normal"
          />

          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography variant="body1" color="error">{error}</Typography>
          ) : (
            <DataGrid
              rows={filteredRows}  // Use filtered rows
              columns={columns} // Ensure columns are defined correctly
              pageSize={25}
              rowsPerPageOptions={[10, 25, 50]}
              pagination
              paginationMode="client"
            />
          )}
        </Box>
      </div>
    </div>
  );
};

export default OrderListView;


