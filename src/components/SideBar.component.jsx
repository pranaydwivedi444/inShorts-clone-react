import React from 'react'
import { navBarConfig } from '../config';
import { Link } from 'react-router-dom';

function SideBar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Categories</h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          ✕
        </button>
      </div>
      <div className="p-4">
        <ul>
          {navBarConfig.map((el) => (
            <li className="py-2 px-2 hover:bg-gray-700 rounded">
              <Link to={`/category/${el}`}>{el}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar
