import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Signup from "./component/Signup";
import Login from "./component/Login";

import Checkout from "./component/Checkout";
import Admindashboard from "./pages/Admindashboard";
import Cart from "./component/Cart";


export const Globalstate = createContext();

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  const [admincart, setAdmincart] = useState([]);

  return (
    
    <Globalstate.Provider value={{ users, setUsers, cart, setCart, admincart, setAdmincart }}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
        </Routes>
      </Router>
    </Globalstate.Provider>
  );
};

export default App;
