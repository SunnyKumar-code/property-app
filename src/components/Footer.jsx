import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-purple-400">Estatary</h2>
          <p className="text-sm">© 2025 Estatary. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-300 hover:text-purple-400">About Us</a>
          <a href="/contact" className="text-gray-300 hover:text-purple-400">Contact</a>
          <a href="/privacy" className="text-gray-300 hover:text-purple-400">Privacy Policy</a>
          <a href="/terms" className="text-gray-300 hover:text-purple-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;