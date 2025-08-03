import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const Campaigns = () => {
  const [users, setUsers] = useState([]);
  const [page, setpage] = useState(1);


  const [amounts, setAmounts] = useState({});


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
    if (!amount || amount <= 0) return toast("Enter a valid amount");

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
        toast.success("Thanks for your Donation");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  return (
    <>
      <div className="h-[20px]"></div>
      <NavbarUser />
      <div className="min-h-[70vh] px-6 py-10 bg-gray-50 relative">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Active Campaigns
        </h1>
        <div className="flex flex-row gap-5">
          <button
            className="h-15 w-8 round bg-blue-500 text-2xl text-white rounded-2xl absolute top-1/2 left-4 "
            onClick={prev}
            disabled={page < 2}
          >
            {"<"}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white shadow-md rounded-xl p-5 w-full max-w-xs hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-between items-center"
              >
                {user.image && (
                  <img
                    src={user.image}
                    alt="image"
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                )}

                {user.title && (
                  <h2 className="text-lg font-bold text-amber-600  text-center uppercase p-0">
                    {user.title}
                  </h2>
                )}

                <h3 className="text-md font-semibold text-gray-800 text-center uppercase p-0">
                  {user.name}
                </h3>

                {user.desc && (
                  <p className="text-gray-600 text-sm line-clamp-3 text-center p-0">
                    {user.desc}
                  </p>
                )}

                <p className="text-gray-600 mb-1 text-center">
                  City: {user.city}
                </p>

                {user.target && (
                  <p className="text-gray-700 mb-1 text-sm font-medium text-center">
                    🎯 Target: {user.target}
                  </p>
                )}
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
      </div>
      <Footer />
    </>
  );
};

export default Campaigns;