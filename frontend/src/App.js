import {Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Report from './pages/Report';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Report/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;
