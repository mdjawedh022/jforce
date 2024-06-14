import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [show, setShow] = useState("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();
  const handleShow = (e) => {
    if (e.target.checked) {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const formData = { username, password, email, phone };
      console.log(formData);

      try {
        let res = await axios.post(
          "http://localhost:8080/api/register",
          formData
        );
        console.log(res);
        alert("Data sent successfully!");
        navigate("/login");
        setEmail("");
        setPassword("");
        setPhone("");
        setUsername("");
      } catch (err) {
        console.log(err);
        alert("Error sending data!");
      }
    
  };

  return (
    <div className="login-wrapper">
      <h1>Register page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type={show}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone no"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <div className="checkbox">
          <p>Show password</p> <input type="checkbox" onChange={handleShow} />
        </div>
        <button type="submit">Register</button>
        <p>
          If already account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
