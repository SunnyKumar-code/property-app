import React from 'react';

const Navbar = () => (
  <nav className="bg-gray-50 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-purple-600 font-bold text-xl">Estatary</div>
      <div className="space-x-4">
        <button className="text-gray-600 hover:text-purple-600 hidden md:inline">Rent</button>
        <button className="text-gray-600 hover:text-purple-600 hidden md:inline">Buy</button>
        <button className="text-gray-600 hover:text-purple-600 hidden md:inline">Sell</button>
        <button className="text-gray-600 hover:text-purple-600 hidden md:inline">Manage Property</button>
        <button className="text-gray-600 hover:text-purple-600 hidden md:inline">Resources</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Login</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Navbar;