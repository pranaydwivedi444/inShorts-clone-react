import React from 'react'

function NavBar({toggleSidebar}) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 flex items-center justify-center p-4">
      <button
        onClick={toggleSidebar}
        className="text-gray-600 hover:text-gray-900 focus:outline-none absolute left-4 "
      >
        ☰ Menu
      </button>
      <h1 className="text-xl font-bold ">InShorts</h1>
    </nav>
  );
}

export default NavBar
