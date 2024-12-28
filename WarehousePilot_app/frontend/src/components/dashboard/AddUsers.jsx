import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddUsers() {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [dob, setdob] = useState(new Date());
  const [department, setDepartment] =   useState('');
  const typesOfUsers = ['Admin', 'Manager', 'Staff'];
  
  
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const token = localStorage.getItem('token');
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/admin_dashboard/users_list/', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/admin_dashboard/add_user/', { username, first_name, last_name, email, password, role, dob, department},
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      console.log('Add User response:', response.data); // Log the entire response
      const { access, user } = response.data; // Adjust this based on the actual structure
      console.log('Response:', user); // Log the user object to see its structure
      
      // if successful add: alert success and redirect to user list
    } catch (error) {
      console.error('Add User failed:', error);
      alert('Couldn\'t add user'); // remove alert later and replace with pop up UI message
    }
  };

  return (
    <div>
        <form onSubmit={AddUser}>
            <label>Username:</label>
            <input type="text" 
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required />
            <label>First Name:</label>
            <input type="text" 
            name="first_name"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required />
            <label>Last Name:</label>
            <input type="text" 
            name="last_name"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required />
            <label>Email:</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required />
            <label>Password:</label>
            <input 
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)} 
            name="password" required />
            <label>Role:</label>
            <div>
              {typesOfUsers.map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="role"
                    value={type}
                    checked={role === type}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>
            <label>Department:</label> {/* future improvement: normalize entries */}
            <input 
            type="text"
            placeholder="Enter Department Name"
            onChange={(e) => setDepartment(e.target.value)} 
            name="department" required />
            <label>Date of Birth:</label>
            <input 
            type="date"
            placeholder="Enter Date of Birth"
            onChange={(e) => setdob(e.target.value)}
            name="dob"
            required/>
            <button type="submit">Add User</button>
        </form>
    </div>
  );
}

export default AddUsers;