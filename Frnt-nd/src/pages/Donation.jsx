import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Donation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers(limit = 10) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/donations`,
          { limit },
          { withCredentials: true }
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch donations");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div className="h-[20px]"></div>
      <NavbarUser />
      <div className="min-h-[70vh] px-6 py-10 bg-gray-50">
        {/* <h1 className="text-3xl font-bold mb-8 text-center">Recent Donations</h1> */}

        {loading ? (
          <p className="text-center text-gray-600">Loading donations...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white shadow-md rounded-xl p-5 w-full max-w-xs hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  <h2 className="text-xl font-semibold text-gray-800 mb-1 uppercase">
                    {user.name}
                  </h2>

                  
                  {user.context && (
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {user.context}
                    </p>
                  )}

                  
                  <p className="text-gray-600 mb-1">City: {user.city}</p>
                  <p className="text-gray-600 mb-1">Need: <span className="font-medium">{user.helpType}</span></p>
                  <p className="text-gray-600 mb-1">
                    Urgency:{" "}
                    <span className={`font-semibold ${user.urgency === 'high' ? 'text-red-600' :
                        user.urgency === 'medium' ? 'text-yellow-600' :
                          'text-green-600'
                      }`}>
                      {user.urgency}
                    </span>

                  </p>
                </div>

                <button
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-amber-600 transition uppercase font-medium"
                  onClick={() => console.log("Clicked:", user.name)}
                >
                  Donate Now
                </button>
              </div>


            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Donation;
