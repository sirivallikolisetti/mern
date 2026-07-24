import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Auth Pages */
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

/* Patient Dashboard Pages */
import PatientDashboard from "./pages/PatientDashboard/PatientDashboard";
import BookAppointment from "./pages/PatientDashboard/BookAppointment";
import UpcomingAppointments from "./pages/PatientDashboard/UpcomingAppointments";
import AppointmentHistory from "./pages/PatientDashboard/AppointmentHistory";
import DoctorsList from "./pages/PatientDashboard/DoctorsList";
import SearchDoctor from "./pages/PatientDashboard/SearchDoctor";
import Profile from "./pages/PatientDashboard/Profile";
import Notifications from "./pages/PatientDashboard/Notifications";

/* Doctor & Admin (you can create later) */
import DoctorDashboard from "./pages/DoctorDashboard/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
function App() {

  return (

    <Router>

      <Routes>

        {/* Auth Routes */}

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        {/* Patient Dashboard */}

        <Route path="/patient" element={<PatientDashboard />} />

        <Route path="/book-appointment" element={<BookAppointment />} />

        <Route path="/upcoming" element={<UpcomingAppointments />} />

        <Route path="/appointment-history" element={<AppointmentHistory />} />

        <Route path="/doctors" element={<DoctorsList />} />

        <Route path="/search-doctor" element={<SearchDoctor />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/notifications" element={<Notifications />} />


        {/* Doctor Dashboard */}

        <Route path="/doctor" element={<DoctorDashboard />} />


        {/* Admin Dashboard */}

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </Router>

  );

}

export default App;