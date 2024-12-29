// Admin page - Manage Users
// route: /admin_dashboard/manage_users
// Displays all users and redirects you to the options of adding, editing, and removing a user
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// Handle button click for "View more"
const handleClick = (event, cellValues) => {
    //TODO: implement edit or delete
    console.log(cellValues.row); // Log row data to the console
};

// Define table columns
const STAFF_COLUMNS = [
    { field: 'id', headerName: 'No.', width: 100, type: 'number' },
    { field: 'firstName', headerName: 'First Name', width: 180 },
    { field: 'lastName', headerName: 'Last Name', width: 180 },
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
        width: 150
    }
];

// Pagination defaults
const DEFAULT_PAGINATION = {
    page: 0,
    pageSize: 15,
};

export default function UsersTable() {
    const [allUsers, setAllUsers] = useState([]); // Raw user data from the backend API
    const [staffData, setStaffData] = useState([]); // Formatted data for the table component, DataGrid

    // Function to fetch user data from the backend API
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin_dashboard/manage_users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setAllUsers(response.data); // Store the raw data
            console.log('User data has been retrieved successfully');

        } catch (error) {
            console.error('Getting users failed:', error);
            alert("Couldn't get users");
        }
    };

    // Formating data when the value of "allUsers" changes
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

    // Storing for use in the Manage Users Page
    localStorage.setItem('staffAmount', allUsers.length);

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
                rowHeight={45}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    border: 0,
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                }} />
        </Paper>
    );
}
