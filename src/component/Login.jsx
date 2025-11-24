import React, { useContext, useRef, useState } from 'react';
import { Globalstate } from '../App';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const val = useContext(Globalstate);
  const navi = useNavigate();

  
  const { users, setUsers } = val;

  const userRef = useRef('');
  const passRef = useRef('');
  const [error, setError] = useState('');

  const login = (e) => {
    e.preventDefault(); 

    
    const userFound = users.find(
      (cur) =>
        cur.username === userRef.current.value &&
        cur.password === passRef.current.value
    );

    if (userFound) {
      setError('');
      navi('/home');
    } else if (
      userRef.current.value === 'Raj' &&
      passRef.current.value === 'Admin@123'
    ) {
      navi('/admindashboard'); 
    } else {
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-100">
      <form
        onSubmit={login}
        className="bg-amber-500 p-10 rounded-3xl shadow-2xl w-[400px]"
      >
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
          LOGIN
        </h1>

        {error && (
          <p className="text-red-700 font-semibold text-center mb-4">{error}</p>
        )}

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Username</label>
          <input
            className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white"
            type="text"
            ref={userRef}
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label className="text-2xl font-semibold text-white">Password</label>
          <input
            className="mt-2 w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white"
            type="password"
            ref={passRef}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-amber-400 font-bold py-3 rounded-2xl hover:bg-gray-900 hover:text-amber-300 transition-all duration-300 shadow-lg"
        >
          Login
        </button>

        <p className="text-white mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="underline hover:text-violet-300">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
