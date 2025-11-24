import React from "react";
import { Link } from "react-router-dom";

const Tickanimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-amber-100 text-center p-4 w-400">
      
      
      <div className="relative w-24 h-24 mb-6">
        
        <div className="absolute inset-0 rounded-full border-4 border-green-400 opacity-50 animate-pulse"></div>

        
        <svg
          className="w-24 h-24 text-green-600"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26"
            cy="26"
            r="25"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-50"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="48"
            strokeDashoffset="48"
            d="M14 27l8 8 16-16"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="48"
              to="0"
              dur="0.8s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>

      
      <h2 className="text-3xl font-bold text-green-700 mb-2 animate-fadeIn">
        Order Placed Successfully!
      </h2>
      <p className="text-gray-700 mb-8 animate-fadeInSlow">
        Your items are on the way 🚚
      </p>

      
      <Link
        to="/home"
        className="bg-black text-amber-400 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-900 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
      >
        Go to Home
      </Link>

      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInSlow {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
          .animate-fadeInSlow { animation: fadeInSlow 1.2s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default Tickanimation;
