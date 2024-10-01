import React, { useState } from 'react';
import { Menu, X, User, Settings, HelpCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white-600 to-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hololive_ENGLISH_logo.png/640px-Hololive_ENGLISH_logo.png" alt="Logo" className="w-40 h-15 rounded-full" />
         
        </div>

        {/* Contact Info - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-4 text-black">
          <a href="mailto:info@example.com" className="hover:text-blue-700">
            <span className="mr-2">📧</span>lahiruheshan454@gmail.com
          </a>
          <a href="tel:+1234567890" className="hover:text-blue-700">
            <span className="mr-2">📞</span>+94 (76) 4165-833
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Navbar Links and Profile */}
        <div className="hidden lg:flex items-center space-x-4 text-black text-lg">
          <a href="/" className="hover:text-blue-700">Home</a>
          <a href="/about" className="hover:text-blue-700">About</a>
          <a href="/services" className="hover:text-blue-700">Services</a>
          <a href="/contact" className="hover:text-blue-700">Contact</a>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <User size={24} />
              <span>Profile</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
                <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Settings size={18} className="inline mr-2" /> Settings
                </a>
                <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <User size={18} className="inline mr-2" /> Profile
                </a>
                <a href="/help" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <HelpCircle size={18} className="inline mr-2" /> Help
                </a>
                <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <LogOut size={18} className="inline mr-2" /> Logout
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Side Drawer */}
        <div 
          className={`lg:hidden fixed top-0 right-0 bottom-0 w-64 bg-blue-800 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none absolute top-4 right-4"
            >
              <X size={24} />
            </button>
            <div className="mt-8 flex flex-col space-y-4 text-white text-lg">
              <a href="/" className="hover:text-gray-200">Home</a>
              <a href="/about" className="hover:text-gray-200">About</a>
              <a href="/services" className="hover:text-gray-200">Services</a>
              <a href="/contact" className="hover:text-gray-200">Contact</a>
              <div className="pt-4 border-t border-blue-700">
                <a href="/settings" className="block py-2 hover:text-gray-200">
                  <Settings size={18} className="inline mr-2" /> Settings
                </a>
                <a href="/profile" className="block py-2 hover:text-gray-200">
                  <User size={18} className="inline mr-2" /> Profile
                </a>
                <a href="/help" className="block py-2 hover:text-gray-200">
                  <HelpCircle size={18} className="inline mr-2" /> Help
                </a>
                <a href="/logout" className="block py-2 hover:text-gray-200">
                  <LogOut size={18} className="inline mr-2" /> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;