import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    // Save token and user info in localStorage
    localStorage.setItem("token", res.data.token);          // JWT token
    localStorage.setItem("user", JSON.stringify(res.data.user)); // user info

    const role = res.data.role;

    if (role === "patient") navigate("/patient");
    else if (role === "doctor") navigate("/doctor");
    else if (role === "admin") navigate("/admin");
    else alert("Unknown role");

  } catch (error) {
    alert("Login failed");
    console.log(error);
  }
};
  return (
    <div className="login-page">

      <div className="login-card">

        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png"
          alt="hospital logo"
        />

        <h2>Welcome Back</h2>
        <p className="tagline">
          Book Your Healthcare Appointment Easily
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <FaEnvelope className="icon"/>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon"/>

            <input
              type={showPassword ? "text":"password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <span
              className="eye"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>

          </div>

          <div className="options">

            <label>
              <input type="checkbox"/> Remember Me
            </label>

            <Link to="#">Forgot Password?</Link>

          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-link" style={{marginTop:"15px"}}>

          Don't have an account?

          <Link to="/register"> Register</Link>

        </p>

      </div>

    </div>
  );
}

export default Login;