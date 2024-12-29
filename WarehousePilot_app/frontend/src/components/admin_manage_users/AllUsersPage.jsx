// Admin page - Manage Users
// route: /admin_dashboard/manage_users
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


// Handle button click for "View more"
const handleClick = (event, cellValues) => {
    console.log(cellValues.row); // Log row data to the console
};

// Define table columns
const STAFF_COLUMNS = [
    { field: 'id', headerName: 'No.', width: 70, type: 'number' },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'staffId', headerName: 'Staff ID', width: 130 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    {
        field: 'viewMore',
        headerName: 'Action',
        renderCell: (cellValues) => (
            <Button
                variant="text"
                color="primary"
                onClick={(event) => handleClick(event, cellValues)}
            >
                View more
            </Button>
        ),
    },
];

// Pagination defaults
const DEFAULT_PAGINATION = {
    page: 0,
    pageSize: 15,
};

export default function AllUsersPage() {
    const [allUsers, setAllUsers] = useState([]); // Raw data from the API
    const [staffData, setStaffData] = useState([]); // Formatted data for DataGrid
    const navigate = useNavigate();

    // Check that the user is an admin (only admins should be able to navigate to this page and add users)
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.role != "admin") {
            // Navigate to correct dashboard
            if (parsedUser.role == "manager") {
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



    // Fetch user data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin_dashboard/manage_users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            console.log(response.data);
            setAllUsers(response.data); // Store the raw data
        } catch (error) {
            console.error('Getting users failed:', error);
            alert("Couldn't get users");
        }
    };

    // Format data when `allUsers` changes
    useEffect(() => {
        const formattedData = allUsers.map((user, index) => ({
            id: index + 1, // Unique identifier for DataGrid
            firstName: user.first_name,
            lastName: user.last_name,
            staffId: user.user_id,
            email: user.email,
            role: user.role,
            department: user.department,
        }));
        setStaffData(formattedData);
    }, [allUsers]);

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Paper
            elevation={2}
            sx={{
                height: 800,
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <DataGrid
                rows={staffData}
                columns={STAFF_COLUMNS}
                initialState={{
                    pagination: { paginationModel: DEFAULT_PAGINATION },
                }}
                pageSizeOptions={[15]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    border: 0,
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                }}
            />
        </Paper>
    );
}
