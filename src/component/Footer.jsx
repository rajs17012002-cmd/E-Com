import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-200 text-gray-800 py-6 px-4 shadow-inner fixed bottom-0 w-full">

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="font-bold">Westside Store</span> — All Rights Reserved
        </div>

        
        <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
          <a href="https://www.instagram.com" className="hover:text-pink-600 transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com"  className="hover:text-blue-600 transition">
            <FaFacebook />
          </a>
          <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-green-600 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
