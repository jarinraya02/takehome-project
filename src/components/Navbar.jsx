import React from 'react';
import { BiBell } from 'react-icons/bi';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ notificationCount }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <Link to="/">
                <img src={logo} alt="logo" className="h-24 w-32" />
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative">
              <BiBell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-black" />
              {notificationCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </div>

            {/* Sign In Button */}
            <button className="px-3 py-1 text-black hover:text-gray-700 font-medium rounded-md border border-black hover:border-gray-700 transition-colors text-sm sm:text-base">
              Sign In
            </button>

            {/* Register Button */}
            <button className="px-4 py-2 text-white bg-black hover:bg-gray-700 font-medium rounded-md transition-colors text-sm sm:text-base">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
