// Admin page - Manage Users
// route: ????
// Admins 
import React, { useEffect, useState } from "react";
import axios from "axios";

const handleDataRetrieval = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get('http://127.0.0.1:8000/admin_dashboard/manage_users/', { staffData });
        console.log('Manage users get response:', response.data); // Log the entire response
        let usersData = response.data;
        console.log('UsersData:', usersData); // Log the object
        localStorage.setItem('users', JSON.stringify(usersData));
        return usersData;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

export default function AllUsersPage() {
    // retrieve the database user data
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        setUsersData(handleDataRetrieval);
    }, []);

    return (
        <div className="staffTableContainer">
            <table className="table-auto">
                <tr>
                    <th>S/N</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Staff ID</th>
                    <th>Email</th>
                    <th>Staff ID</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>
                {usersData.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.user_id}</td>
                        <td>{item.email}</td>
                        <td>{item.user_id}</td>
                        <td>{item.role}</td>
                        <td>{item.department}</td>
                        <td><button >View more</button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

/*


*/