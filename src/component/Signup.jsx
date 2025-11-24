import React, { useContext, useState, useRef } from 'react';
import { Globalstate } from "../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const val = useContext(Globalstate);
  const navi = useNavigate();

  
  const { users, setUsers } = val;

  const nameref = useRef('');
  const userref = useRef('');
  const mobileref = useRef('');
  const mailref = useRef('');
  const passref = useRef('');
  const cpassref = useRef('');

  const [error, setError] = useState('');

  const form = (e) => {
    e.preventDefault();

    const name = nameref.current.value.trim();
    const username = userref.current.value.trim();
    const mobile = mobileref.current.value.trim();
    const mail = mailref.current.value.trim();
    const password = passref.current.value.trim();
    const cpassword = cpassref.current.value.trim();

    if (!name || !username || !mobile || !mail || !password || !cpassword) {
      setError('All fields are required');
      return;
    }

    if (password !== cpassword) {
      setError('Passwords do not match');
      return;
    }

    const data = {
      name,
      username,
      mobile,
      mail,
      password,
    };

    
    setUsers((cur) => [...cur, data]);
    setError('');
    navi('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-100">
      <form onSubmit={form} className="bg-amber-500 p-10 rounded-3xl shadow-2xl w-[90%] max-w-[400px]">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">SIGN UP</h1>

        {error && <p className="text-red-700 font-semibold text-center mb-4">{error}</p>}

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Name</label>
          <input ref={nameref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="text" placeholder="Enter your name" />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Username</label>
          <input ref={userref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="text" placeholder="Enter your username" />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Mobile</label>
          <input ref={mobileref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="number" placeholder="Enter your mobile number" />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Email</label>
          <input ref={mailref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="email" placeholder="Enter your email" />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Password</label>
          <input ref={passref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="password" placeholder="Enter your password" />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Confirm Password</label>
          <input ref={cpassref} className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white" type="password" placeholder="Confirm your password" />
        </div>

        <button type="submit" className="w-full bg-black text-amber-400 font-bold py-3 rounded-2xl hover:bg-gray-900 hover:text-amber-300 transition-all duration-300 shadow-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
