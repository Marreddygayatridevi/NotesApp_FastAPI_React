import React, { useState } from "react";
import api from "../api"; // Assuming 'api' is already configured to point to the backend
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    is_active: true, // Default value, can be changed if necessary
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send the registration data to the backend
      await api.post("/auth/", registerData);
      alert("Registration successful! Please login.");
      navigate("/"); // Redirect to login page
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed. Try a different username or email.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="login-card shadow p-4 rounded">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={registerData.username}
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
            className="form-control mb-3"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
