import React from 'react'
import "../styles/Report.css";
import { useNavigate } from 'react-router-dom';
const Report = () => {
    const navigate=useNavigate()
    const handleloginPage=()=>{
   navigate("/login")
    }
    const handleReport=()=>{
        navigate("/home")
    }
  return (
    <div className="report-wrapper">
      <p>{new Date().toLocaleString()}</p>
      <button onClick={handleloginPage}>Sign In</button>
      <button onClick={handleReport}>Veiw Report</button>
    </div>
  );
}

export default Report
