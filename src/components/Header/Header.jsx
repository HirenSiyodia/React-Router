import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-8 lg:px-16 py-2">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-10"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center space-x-10">
            {/* Navigation Menu */}
            <ul className="hidden lg:flex items-center space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-2 ${isActive ? "text-orange-700" : "text-gray-700"} 
                    hover:text-orange-700 transition-colors`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-2 ${isActive ? "text-orange-700" : "text-gray-700"} 
                    hover:text-orange-700 transition-colors`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-2 ${isActive ? "text-orange-700" : "text-gray-700"} 
                    hover:text-orange-700 transition-colors`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `block py-2 px-2 ${isActive ? "text-orange-700" : "text-gray-700"} 
                    hover:text-orange-700 transition-colors`
                  }
                >
                  Career
                </NavLink>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                to="#"
                className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 text-sm rounded-md"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2 text-sm rounded-md"
              >
                Get started
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
