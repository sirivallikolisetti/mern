// src/pages/AdminDashboard/AdminDashboard.jsx

import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

  return (
    <div className="admin-container">

      {/* Navbar */}
      <div className="admin-navbar">
        <div className="logo">🏥 HealthCare</div>
        <h2>Admin Dashboard</h2>
        <div className="nav-right">
          🔔
          <span>Admin</span>
          <button>Logout</button>
        </div>
      </div>

      <div className="admin-main">

        {/* Sidebar */}
        <div className="admin-sidebar">
          <p>Dashboard</p>
          <p>Doctors</p>
          <p>Patients</p>
          <p>Appointments</p>
          <p>Departments</p>
          <p>Availability</p>
          <p>Reports</p>
          <p>Notifications</p>
          <p>Settings</p>
        </div>

        {/* Content */}
        <div className="admin-content">

          {/* Overview Cards */}
          <div className="cards">
            <div className="card">Total Doctors: 12</div>
            <div className="card">Total Patients: 50</div>
            <div className="card">Appointments: 30</div>
            <div className="card">Today: 8</div>
            <div className="card">Cancelled: 2</div>
          </div>

          {/* Doctor Management */}
          <div className="section">
            <h3>Doctor Management</h3>
            <button>Add Doctor</button>
            <button>Edit Doctor</button>
            <button>Delete Doctor</button>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Sharma</td>
                  <td>Cardiology</td>
                  <td>Edit | Delete</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Patient Management */}
          <div className="section">
            <h3>Patient Management</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ravi</td>
                  <td>9876543210</td>
                  <td>View | Delete</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Appointment Management */}
          <div className="section">
            <h3>Appointments</h3>

            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Ravi</td>
                  <td>Dr. Sharma</td>
                  <td>12 May</td>
                  <td>Pending</td>
                  <td>Approve | Cancel</td>
                </tr>
              </tbody>
            </table>

          </div>

          {/* Department Management */}
          <div className="section">
            <h3>Departments</h3>

            <button>Add Department</button>

            <ul>
              <li>Cardiology</li>
              <li>Neurology</li>
            </ul>
          </div>

          {/* Availability */}
          <div className="section">
            <h3>Doctor Availability</h3>

            <input placeholder="Doctor Name" />
            <input placeholder="Working Days" />
            <input placeholder="Time Slots" />

            <button>Save</button>
          </div>

          {/* Reports */}
          <div className="section">
            <h3>Reports</h3>

            <p>Daily Appointments: 10</p>
            <p>Weekly Visits: 70</p>
          </div>

          {/* Notifications */}
          <div className="section">
            <h3>Notifications</h3>

            <input placeholder="Enter message" />
            <button>Send</button>
          </div>

          {/* Settings */}
          <div className="section">
            <h3>System Settings</h3>

            <p>Manage roles: Admin / Doctor / Patient</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;