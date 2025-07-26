import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Donation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amounts, setAmounts] = useState({});
  const [page, setpage] = useState(1);

  useEffect(() => {

    const limit = 10

    async function fetchUsers( limit , page ) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/donations`,
          { limit , page },
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

    fetchUsers(limit , page );
  }, [page]);

  const prev = () => {
    if (page > 1) setpage(page - 1);
  };

  const load = () => {
    setpage(page + 1);
  };

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({ ...prev, [id]: value }));
  };

  const loadRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });

  const handleDonate = async (id) => {
    const amount = amounts[id];
    if (!amount || amount <= 0) return alert("Enter a valid amount");

    await loadRazorpay();

    const { data: order } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/createOrder`,
      { amount }
    );

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "DropHope",
      description: "Donation Payment",
      order_id: order.id,
      handler: function (res) {
        alert("Thanks for your Donation");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
          <div className="flex flex-row gap-5">
          <button
            className="h-15 w-8 round bg-blue-500 text-2xl text-white rounded-2xl absolute top-1/2 left-4 "
            onClick={prev}
            disabled={page < 2}
          >
            {"<"}
          </button>
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
                  <p className="text-gray-600 mb-1">
                    Need: <span className="font-medium">{user.helpType}</span>
                  </p>
                  <p className="text-gray-600 mb-1">
                    Urgency:{" "}
                    <span
                      className={`font-semibold ${ 
                        user.urgency === "high"
                          ? "text-red-600"
                          : user.urgency === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {user.urgency}
                    </span>
                  </p>
                </div>

                {user.helpType === "Money" && (
                  <div>
                  <input
                  type="number"
                  value={amounts[user._id] || ""}
                  onChange={(e) => handleAmountChange(user._id, e.target.value)}
                  placeholder="Enter donation amount"
                  className="border p-2 my-4"
                />
                  <button
                  className="mt-auto px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-green-600 transition uppercase font-medium"
                  onClick={() => handleDonate(user._id)}
                >
                  Donate
                </button>
                  </div>
                )}
                {user.helpType != "Money" &&(
                  <p className="text-gray-600 mb-1">We don't Provide logistics  <br/>contact {user.name} at <strong>{user.mail}</strong></p>
                )
                }
              </div>
            ))}
          </div>
          <button
            className="h-15 w-8 round bg-blue-500 text-2xl text-white rounded-2xl absolute top-1/2 right-2"
            onClick={load}
            disabled={users.length < 10}
          >
            {">"}
          </button>
        </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Donation;
