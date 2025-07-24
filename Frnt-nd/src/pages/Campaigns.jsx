import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Campaigns = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(limit = 10) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/campaigns",
          { limit },
          { withCredentials: true }
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div className="h-[20px]"></div>
      <NavbarUser />
      <div className="min-h-[70vh] px-6 py-10 bg-gray-50">
        <h1 className="text-3xl font-bold mb-8 text-center">Active Campaigns</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white shadow-md rounded-xl p-5 w-full max-w-xs hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-between"
            >
              
              {user.title && (
                <h2 className="text-lg font-bold text-amber-600 mb-1 text-center uppercase">
                  {user.title}
                </h2>
              )}

              
              <h3 className="text-md font-semibold text-gray-800 mb-2 text-center uppercase">
                {user.name}
              </h3>

              
              {user.desc && (
                <p className="text-gray-600 text-sm mb-2 line-clamp-3 text-center">
                  {user.desc}
                </p>
              )}

             
              <p className="text-gray-600 mb-1 text-center">City: {user.city}</p>

             
              {user.target && (
                <p className="text-gray-700 mb-3 text-sm font-medium text-center">
                  🎯 Target: {user.target}
                </p>
              )}

             
              <button
                className="mt-auto px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-green-600 transition uppercase font-medium"
                onClick={() => console.log("View campaign:", user.name)}
              >
                Donate
              </button>
            </div>

          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Campaigns;
