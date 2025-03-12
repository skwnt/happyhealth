import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidenav() {
  const [userData, setUserData] = useState(null);
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false);
  const navigate = useNavigate();  // For redirecting after logout

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Redirect to the login page (or another page)
    navigate('/login'); // Make sure you have a route for '/login'
  };

  return (
    <div className="fixed inset-y-0 flex w-60 z-10">
      {/* Curvy Shape */}
      <svg
        className="absolute inset-0 w-full h-full text-[#33CCCC]"
        style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
        preserveAspectRatio="none"
        viewBox="0 0 309 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
      </svg>

      {/* Sidebar Content */}
      <div className="z-10 flex flex-col flex-1 p-6">
        <div 
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setIsSlideOutOpen(!isSlideOutOpen)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/user.png`}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-center mt-2">
            <p className="text-base text-white">{userData ? userData.firstName : 'Patient Name'}</p>
            {userData && <p className="text-sm text-gray-300"></p>}
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <ul className="space-y-3 flex-1">
          <li><Link to="/dashboard" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">Dashboard</Link></li>
          <li><Link to="/about" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">About</Link></li>
          <li><Link to="/departments" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">Departments</Link></li>
          <li><Link to="/map" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">Hospital Map</Link></li>
          <li><Link to="/wellness" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">Wellness Tips</Link></li>
          <li><Link to="/games" className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all">Games</Link></li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-[#33CCCC] text-sm flex items-center w-full hover:bg-white rounded px-4 py-3 transition-all"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Slide-Out Panel */}
      <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform ${isSlideOutOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}> 
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Appointments</h2>
          <button onClick={() => setIsSlideOutOpen(false)} className="text-gray-600">✖</button>
        </div>
        <div className="p-4">
          <p>No upcoming appointments</p>
          {userData && <p>{userData.firstName} - {userData.department_name}</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
