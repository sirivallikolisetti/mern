import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ For redirect

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    medicalHistory: "",
    emergencyContact: "",
    role: "patient"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);

      alert("Registration Successful! Please login.");
      navigate("/login"); // ✅ Redirect to Login page
    } catch (err) {
      console.log(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Hospital Registration</h2>

        <form onSubmit={registerUser}>
          <input placeholder="Full Name" name="name" onChange={handleChange} required />
          <input placeholder="Email" type="email" name="email" onChange={handleChange} required />
          <input placeholder="Mobile Number" name="mobile" onChange={handleChange} />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required
          />

          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} />

          <select name="gender" onChange={handleChange}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select name="bloodGroup" onChange={handleChange}>
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </select>

          <textarea placeholder="Medical Conditions" name="medicalHistory" onChange={handleChange} />
          <input placeholder="Emergency Contact" name="emergencyContact" onChange={handleChange} />

          <select name="role" onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;