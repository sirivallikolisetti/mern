import React from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDashboard.css";

function PatientDashboard(){

const navigate = useNavigate();

return (

<div className="container">

{/* Navbar */}
<div className="navbar">
<div className="logo">🏥 HealthCare</div>
<h2>Patient Dashboard</h2>

<div className="nav-right">
<span>🔔</span>
<span>Patient</span>
<button>Logout</button>
</div>

</div>

<div className="main">

{/* Sidebar */}
<div className="sidebar">

<p onClick={()=>navigate("/patient-dashboard")}>
Dashboard
</p>

<p onClick={()=>navigate("/book-appointment")}>
Book Appointment
</p>

<p onClick={()=>navigate("/my-appointments")}>
My Appointments
</p>

<p onClick={()=>navigate("/appointment-history")}>
Appointment History
</p>

<p onClick={()=>navigate("/doctors")}>
Doctors List
</p>

<p onClick={()=>navigate("/profile")}>
Profile
</p>

</div>

{/* Main Content */}
<div className="content">

{/* Dashboard Cards */}
<div className="cards">

<div className="card">
Upcoming: 1
</div>

<div className="card">
Total Visits: 10
</div>

<div className="card">
Completed: 7
</div>

<div className="card">
Pending: 3
</div>

</div>

{/* Upcoming Appointment */}
<div className="section">

<h3>Upcoming Appointment</h3>

<p>
<b>Doctor:</b> Dr. Sharma
</p>

<p>
<b>Department:</b> Cardiology
</p>

<p>
<b>Date:</b> 12 May
</p>

<p>
<b>Time:</b> 10:00 AM
</p>

<p>
<b>Status:</b> Confirmed
</p>

</div>

{/* Quick Actions */}
<div className="section">

<h3>Quick Actions</h3>

<button onClick={()=>navigate("/book-appointment")}>
Book Appointment
</button>

<button onClick={()=>navigate("/doctors")}>
View Doctors
</button>

</div>

</div>
</div>
</div>

);

}

export default PatientDashboard;