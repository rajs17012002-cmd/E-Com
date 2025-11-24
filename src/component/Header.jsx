import React from 'react'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bg-amber-200 flex justify-between p-8">
      <div>
        <h1
          className="text-amber-900 text-3xl font-extrabold hover:text-blue-700"
          id="text"
        >
          WEST<small>side</small>
        </h1>
      </div>
      <div>
        <ul>
          <li className="text-black font-semibold inline-block mx-4">
            <Link to={"/home"}>HOME</Link>
          </li>
          <li className="text-black font-semibold inline-block mx-4">
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li className="text-black font-semibold inline-block mx-4">
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="relative inline-block mx-4 group">
            <button className="text-black font-semibold hover:text-amber-800 transition">
              SETTINGS
            </button>

            <ul className="absolute left-0 hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg mt-2 w-40">
              <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer rounded-t-lg">
                <Link to={"/"}>LOGOUT</Link>
              </li>
              <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                <Link to={"/"}>ADMINDASHBOARD</Link>
              </li>
              <li className="px-4 py-2 hover:bg-amber-100 cursor-pointer rounded-b-lg">
                <Link to={"/contact"}>HELP</Link>
              </li>
            </ul>
          </li>

          <li className="inline-block mx-4">
            <Link to={"/cart"}>
              <IoMdCart />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header