import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [show, setShow] = useState("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleShow = (e) => {
    if (e.target.checked) {
      setShow("text");
    } else {
      setShow("password");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = [username, password];
    console.log(data);
    try {
      let res = await axios.post("http://localhost:8080/api/login", data);
      console.log(res);
      // localStorage.setItem("user")
      alert("login successfully!");
      navigate("/home");
      setPassword("");
      setUsername("");
    } catch (err) {
      console.log(err);
      alert("Error sending data!");
    }
  };
  return (
    <div className="login-wrapper">
      <h1>Login page</h1>
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
        <div className="checkbox">
          <p>Show password</p> <input type="checkbox" onChange={handleShow} />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
