import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Map from './pages/dashboard/map';
import Dashboard from './pages/dashboard/dashboard';
import Account from './pages/dashboard/account';
import Departments from './pages/dashboard/departments';
import DepartmentDetail from './pages/dashboard/departmentdetail'; // Import the new DepartmentDetail component
import Games from './pages/dashboard/games';
import About from './pages/dashboard/about';
import Wellness from './pages/dashboard/wellness';

function App() {
  // State to manage the logged-in status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On first load, check for token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, user is logged in
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

console.log(localStorage.getItem('token'));

  return (
    <div className="App">
      <Router>
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/map" element={isLoggedIn ? <Map /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/account" element={isLoggedIn ? <Account /> : <Navigate to="/login" />} />
          <Route path="/departments" element={isLoggedIn ? <Departments /> : <Navigate to="/login" />} />
          <Route path="/games" element={isLoggedIn ? <Games /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
          <Route path="/wellness" element={isLoggedIn ? <Wellness /> : <Navigate to="/login" />} />
          
          
          {/* Dynamic Department Detail Page */}
          <Route path="/department/:id" element={isLoggedIn ? <DepartmentDetail /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
