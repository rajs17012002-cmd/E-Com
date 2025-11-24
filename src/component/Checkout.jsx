import React, { useContext, useRef, useState } from "react";
import { Globalstate } from "../App";
import Tickanimation from "./Tickanimation";

const Checkout = () => {
  const usernameRef = useRef();
  const nameRef = useRef();
  const mailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();

  const [tog, setToggle] = useState(true);

  const { admincart, setAdmincart, cart, setCart } = useContext(Globalstate);

  const addAdmin = (e) => {
    e.preventDefault();

    const data = {
      username: usernameRef.current.value,
      name: nameRef.current.value,
      mail: mailRef.current.value,
      mobile: mobileRef.current.value,
      address: addressRef.current.value,
    };

    const updatedAdminCart = cart.map((item) => ({
      ...item,
      ...data,
    }));

    console.log("Updated Admin Cart:", updatedAdminCart);

    setAdmincart(updatedAdminCart);
    setCart([]);

    
    usernameRef.current.value = "";
    nameRef.current.value = "";
    mailRef.current.value = "";
    mobileRef.current.value = "";
    addressRef.current.value = "";

    setToggle(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
      {tog ? (
        <form
          onSubmit={addAdmin}
          className="bg-yellow-400 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center ">
            Checkout Form
          </h2>

          <div>
            <label className="block text-sm font-medium ">
              Username
            </label>
            <input
              type="text"
              ref={usernameRef}
              className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              ref={nameRef}
              className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Mobile
            </label>
            <input
              type="text"
              ref={mobileRef}
              className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Mail
            </label>
            <input
              type="email"
              ref={mailRef}
             className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">
              Address
            </label>
            <input
              type="text"
              ref={addressRef}
              className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
            />
          </div>

          <input
            type="submit"
            value="Submit"
           className="mt-1 w-full border bg-black text-white p-2 rounded-2xl focus:ring focus:ring-blue-200"
          />
        </form>
      ) : (
        <Tickanimation />
      )}
    </div>
  );
};

export default Checkout;
