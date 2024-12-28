// Admin page - Manage Users
// route: ????
// Admins 
import { React, useEffect, useState } from "react";
import axios from "axios";


export default function AllUsersPage() {
    const [allUsers, setAllUsers] = useState([]);

    const fetchData = async(e) => {
        //e.preventDefault();
        try{
            const response = await axios.get('http://127.0.0.1:8000/admin_dashboard/manage_users',
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
              );
            console.log(response.data)
            const {access, users} = response.data;
            setAllUsers(response.data);
        }
        catch (error){
            console.error('Getting users failed:', error);
            alert('Couldn\'t get users');
        }
    }

    useEffect(() =>{
        fetchData();
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
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>
                {allUsers.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.user_id}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td>{item.department}</td>
                        <td><button >View more</button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}