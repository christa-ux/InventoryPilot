import React, { useState } from "react";
import axios from "axios";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // or /16, depending on your setup

export default function AddUsers() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDob] = useState(new Date());

  const typesOfUsers = ["Admin", "Manager", "Staff"];

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Token from localStorage:", localStorage.getItem("token"));
      const response = await axios.post(
        "http://127.0.0.1:8000/admin_dashboard/add_user/",
        {
          username,
          first_name,
          last_name,
          email,
          password,       // Now included
          department,
          role,
          dob
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Add User response:", response.data);
      alert("user created sucessfully")
      // If successful, show success alert or navigate to user list
    } catch (error) {
      console.error("Add User failed:", error);
      alert("Couldn't add user"); // replace with better UI feedback as needed
    }
  };

  return (
    <form onSubmit={AddUser} className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Section */}
        <div className="max-w-60 lg:w-1/3 p-4 md:p-6 border-2 border-grey-500/50 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4">
            <UserCircleIcon
              className="text-gray-300 md:size-32"
              aria-hidden="true"
            />
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-900"
            >
              Profile Picture
            </label>
          </div>
        </div>

        {/* Form Fields Section */}
        <div className="w-full lg:w-2/3 p-4 md:p-6 border-2 border-grey-500/50 rounded-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                New Staff
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                This is only an admin permission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Enter First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  DOB
                </label>
                <input
                  id="dob"
                  type="date"
                  placeholder="Enter dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Department
                </label>
                <input
                  id="department"
                  type="text"
                  placeholder="Enter Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Role
                </label>
                <div className="relative">
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full rounded-md outline outline-1 -outline-offset-1 outline-gray-300 border-gray-300 shadow-sm px-3 py-2 appearance-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                  >
                    <option value="">Select Role</option>
                    {typesOfUsers.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full md:w-auto rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors"
              >
                Add Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
