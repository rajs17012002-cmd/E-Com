
import React, { useContext } from "react";
import { Globalstate } from "../App";

const Admindashboard = () => {
  const { admincart } = useContext(Globalstate);

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {admincart.map((cur, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4">{cur.username}</td>
                <td className="py-3 px-4">{cur.mobile}</td>
                <td className="py-3 px-4">{cur.mail}</td>
                <td className="py-3 px-4">
                  <img
                    src={cur.image}
                    alt={cur.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{cur.title}</td>
                <td className="py-3 px-4 font-semibold text-green-700">${cur.price}</td>
                <td className="py-3 px-4">{cur.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admindashboard;
