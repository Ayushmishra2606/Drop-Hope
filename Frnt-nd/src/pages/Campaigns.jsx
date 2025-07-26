import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Campaigns = () => {
  const [users, setUsers] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const limit = 10;

    async function fetchUsers(limit, page) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/campaigns`,
          { limit, page },
          { withCredentials: true }
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }

    fetchUsers(limit, page);
  }, [page]);

  const prev = () => {
    if (page > 1) setpage(page - 1);
  };

  const load = () => {
    setpage(page + 1);
  };

  return (
    <>
      <div className="h-[20px]"></div>
      <NavbarUser />
      <div className="min-h-[70vh] px-4 py-8 bg-gray-50 relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Active Campaigns
        </h1>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={prev}
            disabled={page < 2}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            {"<"}
          </button>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] p-3 w-full max-w-[250px] flex flex-col items-center"
              >
                <img
                  src={
                    user.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt="campaign"
                  className="rounded-md w-full h-32 object-cover mb-2"
                />

                {user.title && (
                  <h2 className="text-base font-semibold text-amber-600 mb-1 text-center uppercase">
                    {user.title}
                  </h2>
                )}

                <h3 className="text-sm font-medium text-gray-800 mb-1 text-center uppercase">
                  {user.name}
                </h3>

                {user.desc && (
                  <p className="text-gray-600 text-xs mb-1 line-clamp-3 text-center">
                    {user.desc}
                  </p>
                )}

                <p className="text-gray-600 text-xs mb-1 text-center">
                  City: {user.city}
                </p>

                {user.target && (
                  <p className="text-gray-700 mb-2 text-xs font-medium text-center">
                    🎯 Target: {user.target}
                  </p>
                )}

                <button
                  className="mt-auto px-3 py-1.5 bg-amber-500 hover:bg-green-600 text-white text-sm rounded-md transition uppercase font-semibold tracking-wide"
                  onClick={() => console.log("View campaign:", user.name)}
                >
                  Donate
                </button>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={load}
            disabled={users.length < 10}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed z-10"
          >
            {">"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Campaigns;
