import React, { useContext, useState } from "react";
import { Globalstate } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const val = useContext(Globalstate);
  const { cart, setCart } = val;
  const [tog, setTog] = useState(false);
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-amber-100">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Your Cart is Empty 🛒
        </h2>
        <Link
          to="/home"
          className="bg-black text-amber-400 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-900 hover:text-amber-300 transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 p-10">
      <h3 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        🛍️ Your Cart
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-xl border border-gray-200">
          <thead className="bg-amber-500 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Image</th>
              <th className="py-3 px-5 text-left">Title</th>
              <th className="py-3 px-5 text-left">Price</th>
              <th className="py-3 px-5 text-left">Description</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cur, i) => (
              <tr
                key={i}
                className="border-b hover:bg-amber-100 transition-all duration-200"
              >
                <td className="py-3 px-5">
                  <img
                    src={cur.image}
                    alt={cur.title}
                    className="w-20 h-20 object-contain rounded-xl border"
                  />
                </td>
                <td className="py-3 px-5 font-semibold">{cur.title}</td>
                <td className="py-3 px-5 font-bold text-green-700">
                  ₹{cur.price}
                </td>
                <td className="py-3 px-5 text-gray-600 truncate max-w-[200px]">
                  {cur.description}
                </td>
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => removeFromCart(cur.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-all duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
