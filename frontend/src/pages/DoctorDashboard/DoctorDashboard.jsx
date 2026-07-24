import React, { useState } from "react";
import "./DoctorDashboard.css";

function DoctorDashboard() {

  const [appointments] = useState([
    { name: "John Doe", time: "10:00", reason: "Fever", status: "Pending" },
    { name: "Jane Smith", time: "11:30", reason: "Checkup", status: "Confirmed" }
  ]);

  return (
    <div className="container">

      {/* Top Navbar */}
      <div className="navbar">
        <div className="logo">🏥 HealthCare</div>
        <h2>Doctor Dashboard</h2>
        <div className="nav-right">
          🔔
          <span className="profile">Dr. Rao</span>
          <button>Logout</button>
        </div>
      </div>

      <div className="main">

        {/* Sidebar */}
        <div className="sidebar">
          <p>Dashboard</p>
          <p>Today's Appointments</p>
          <p>Patient List</p>
          <p>Weekly Schedule</p>
          <p>Appointment History</p>
          <p>Availability</p>
          <p>Profile Settings</p>
        </div>

        {/* Content */}
        <div className="content">

          {/* Cards */}
          <div className="cards">
            <div className="card">Appointments Today: 5</div>
            <div className="card">Next Patient: John</div>
            <div className="card">Total Patients: 20</div>
            <div className="card">Available Slots: 8</div>
          </div>

          {/* Appointments Table */}
          <div className="section">
            <h3>Today's Appointments</h3>

            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((app, index) => (
                  <tr key={index}>
                    <td>{app.name}</td>
                    <td>{app.time}</td>
                    <td>{app.reason}</td>
                    <td>{app.status}</td>
                    <td><button>Update</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekly Schedule */}
          <div className="section">
            <h3>Weekly Schedule</h3>
            <div className="schedule">
              <div>Mon<br/>10:00 Appointment</div>
              <div>Tue<br/>Available</div>
              <div>Wed<br/>11:00 Appointment</div>
              <div>Thu<br/>Available</div>
              <div>Fri<br/>12:00 Appointment</div>
            </div>
          </div>

          {/* Bottom Layout */}
          <div className="bottom">

            {/* Patient Panel */}
            <div className="panel">
              <h3>Patient Details</h3>
              <p>Name: John Doe</p>
              <p>Age: 25</p>
              <p>Contact: 9876543210</p>
              <p>Previous Visits: 3</p>
            </div>

            {/* Notes Section */}
            <div className="panel">
              <h3>Consultation Notes</h3>

              <input placeholder="Diagnosis" />
              <input placeholder="Symptoms" />
              <input placeholder="Prescription" />
              <input type="date" />

              <button>Save Notes</button>
            </div>

          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Hospital Management System | Support | v1.0
      </div>

    </div>
  );
}

export default DoctorDashboard;