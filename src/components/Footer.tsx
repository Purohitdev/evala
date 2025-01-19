import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Eval.ai</h4>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Section */}

     <a href="https://www.community.impic.tech/">
     <h1>@TeamImpic - @TeamAdmins </h1>
     </a>
      
      </div>
    </footer>
  );
};

export default Footer;
