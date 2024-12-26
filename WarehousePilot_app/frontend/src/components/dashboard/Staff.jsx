// Staff.jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const STAFF_COLUMNS = [
  { field: 'id', headerName: 'ID', width: 70, type: 'number' },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'staffid', headerName: 'Staff ID', width: 130 },
  { field: 'email', headerName: 'Email', width: 330 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'departement', headerName: 'Departement', width: 130 },
];

const STAFF_DATA = [
  {
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    staffid: 'STF001',
    email: 'jon.snow@example.com',
    role: 'Manager',
    departement: 'Operations',
    phone: ''
  },
    { id: 2, firstName: 'Cersei', lastName: 'Lannister', staffid: 'STF002', email: 'cersei.lannister@example.com', role: 'Director', departement: 'Finance' },
    { id: 3, firstName: 'Jaime', lastName: 'Lannister', staffid: 'STF003', email: 'jaime.lannister@example.com', role: 'Supervisor', departement: 'Logistics' },
    { id: 4, firstName: 'Arya', lastName: 'Stark', staffid: 'STF004', email: 'arya.stark@example.com', role: 'Analyst', departement: 'IT' },
    { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', staffid: 'STF005', email: 'daenerys.targaryen@example.com', role: 'CEO', departement: 'Management' },
    { id: 6, firstName: 'Ferrara', lastName: 'Clifford', staffid: 'STF006', email: 'ferrara.clifford@example.com', role: 'Engineer', departement: 'Production' },
    { id: 7, firstName: 'Rossini', lastName: 'Frances', staffid: 'STF007', email: 'rossini.frances@example.com', role: 'Coordinator', departement: 'HR' },
    { id: 8, firstName: 'Harvey', lastName: 'Roxie', staffid: 'STF008', email: 'harvey.roxie@example.com', role: 'Technician', departement: 'Maintenance' },
    { id: 9, firstName: 'Sansa', lastName: 'Stark', staffid: 'STF009', email: 'sansa.stark@example.com', role: 'Assistant', departement: 'Admin' },
    { id: 10, firstName: 'Bran', lastName: 'Stark', staffid: 'STF010', email: 'bran.stark@example.com', role: 'Intern', departement: 'R&D' },
    { id: 11, firstName: 'Tyrion', lastName: 'Lannister', staffid: 'STF011', email: 'tyrion.lannister@example.com', role: 'Consultant', departement: 'Strategy' },
    { id: 12, firstName: 'Samwell', lastName: 'Tarly', staffid: 'STF012', email: 'samwell.tarly@example.com', role: 'Researcher', departement: 'Knowledge' },
    { id: 13, firstName: 'Jorah', lastName: 'Mormont', staffid: 'STF013', email: 'jorah.mormont@example.com', role: 'Advisor', departement: 'Legal' },
    { id: 14, firstName: 'Theon', lastName: 'Greyjoy', staffid: 'STF014', email: 'theon.greyjoy@example.com', role: 'Officer', departement: 'Security' },
    { id: 15, firstName: 'Brienne', lastName: 'Tarth', staffid: 'STF015', email: 'brienne.tarth@example.com', role: 'Guard', departement: 'Protection' },
];



const DEFAULT_PAGINATION = {
  page: 0,
  pageSize: 15
};

const Staff = () => (
  <Paper 
    elevation={2}
    sx={{ 
      height: 800, 
      width: '100%',
      borderRadius: '8px',
      overflow: 'hidden'
    }}
  >
    <DataGrid
      rows={STAFF_DATA}
      columns={STAFF_COLUMNS}
      initialState={{ 
        pagination: { paginationModel: DEFAULT_PAGINATION } 
      }}
      pageSizeOptions={[15]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{ 
        border: 0,
        '& .MuiDataGrid-cell:focus': {
          outline: 'none'
        }
      }}
    />
  </Paper>
);

export default Staff;

