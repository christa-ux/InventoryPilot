// Admin page - Manage Users
// route: ????
// Admins 
import React, { useState, useEffect } from "react";
import axios from "axios";

function viewMoreButtonPopup(var id)



export default function AllUsersPage() {
    // retrieve the database user data
    const [usersData, setUsersData] = useState();  




    return (
        <div className="staffTableContainer">
            <div cla>

            </div>
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