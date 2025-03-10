import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
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
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <p className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-xl">
            <img
              src={`${process.env.PUBLIC_URL}/images/user.png`}
              alt="Avatar"
              className="w-48 inline-block"
            />
          </p>
          <div className="text-center mt-2">
            <p className="text-base text-white">Patient Name</p>
            <p className="text-xs text-gray-300">Patient Number</p>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <ul className="space-y-3 flex-1">
          <li>
          <Link
            to="/dashboard"
            className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
          >
            
            Dashboard
             </Link>
          </li>
          <li>
          <Link
            to="/about"
            className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
          >
            
            About
             </Link>
          </li>
          <li>
          <Link
            to="/departments"
            className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
          >
            
            Departments
             </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
            >
              <span>Hospital Map</span>
            </a>
          </li>
          <li>
          <Link
            to="/wellness"
            className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
          >
            
            Wellness Tips
             </Link>
          </li>
          <li>
          <Link
            to="/games"
            className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
          >
            
            Games
             </Link>
          </li>
          
          <li>
            <a
              href="#"
              className="text-white hover:text-[#33CCCC] text-sm flex items-center hover:bg-white rounded px-4 py-3 transition-all"
            >
              <span>Logout</span>
            </a>
          </li>
        </ul>


      </div>
    </div>
  );
}

export default Sidenav;
