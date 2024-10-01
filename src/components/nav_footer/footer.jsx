import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hololive_ENGLISH_logo.png/640px-Hololive_ENGLISH_logo.png"
                alt="Logo"
                className="w-44 mx-auto md:mx-0"
              />
            </a>
          </div>

          {/* Links */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Grammer</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Vocabulary</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">UK English</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Sri Lanka University</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">English day</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Speek Engslish</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">English com</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Web lk</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">English to me</a>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-4">
              <a href="/" className="hover:text-gray-400">Learn</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 English with me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
