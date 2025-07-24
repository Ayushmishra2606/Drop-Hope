import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Userdashboard = () => {
  const [username, setUsername] = useState("Guest");

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("https://drop-hope-backend.onrender.com/info", {
          withCredentials: true,
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo()
  }, []);

  useEffect(() => {
  const fetchCampaigns = async () => {
      try {
        const response = await axios.post(
          "https://drop-hope-backend.onrender.com/api/myRequests",
          {},
          { withCredentials: true }
        );
        setCampaigns(response.data);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
        alert("Could not fetch your campaigns.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  const donate = () => navigate("/user/donate");
  const help = () => navigate("/user/help");
  const campaign = () => navigate("/user/campaigns");

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="p-2"></div>
      <NavbarUser />
      <div className="text-2xl italic mt-5 mx-25 w-[15%] font-bold">
        Hello, {username} 👋
      </div>

      <div className="flex gap-4 justify-around mt-5">
        <div className="w-[30%] h-[100px] bg-white rounded-xl border-b-neutral-500 shadow-2xl flex items-center flex-col justify-center">
          <p className="text-3xl font-semibold">❤️ ₹0</p>
          <p className="font-semibold font-sans text-[#64748B]">
            Total Donations Made
          </p>
        </div>
        <div className="w-[30%] h-[100px] bg-white rounded-xl border-b-neutral-500 shadow-2xl flex items-center flex-col justify-center">
          <p className="text-3xl font-semibold">🎁 0</p>
          <p className="font-semibold font-sans text-[#64748B]">
            Total Items Donated
          </p>
        </div>
        <div className="w-[30%] h-[100px] bg-white rounded-xl border-b-neutral-500 shadow-2xl flex items-center flex-col justify-center">
          <p className="text-3xl font-semibold">⏳ 0</p>
          <p className="font-semibold font-sans text-[#64748B]">
            Help Requests Received{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-14 mt-5 text-white">
        <button
          className="text-2xl bg-[#2563EB] rounded-2xl px-8 py-4 hover:bg-[rgb(135,169,242)]"
          onClick={help}
        >
          🤝 Request Help
        </button>
        <button
          className="text-2xl bg-[#F97316] rounded-2xl px-8 py-4 hover:bg-[#ff9c56]"
          onClick={donate}
        >
          Donate Now
        </button>
        <button
          className="text-2xl bg-[#01cf75] rounded-2xl px-8 py-4"
          onClick={campaign}
        >
          View Campaigns
        </button>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 py-4">
        {/* Recent Donations */}
        <div className="bg-white border-white shadow-2xl rounded-xl p-6 h-fit">
          <h1 className="font-bold px-4 py-4 text-xl">Recent Donations</h1>
          <div className="px-4 py-2 space-y-4">
            <div className="flex flex-col">
              <span>No Donation Found</span>
            </div>
          </div>
        </div>

        {/* Your Requests */}
        <div className="border border-gray-200 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
          <h1 className="text-2xl font-bold text-[#2563EB] mb-4">Your Requests</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {campaigns.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                You haven’t created any campaigns yet.
              </p>
            )}
            {campaigns.map((cmp, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#2563EB]">
                  Help, {cmp.name}
                </h3>
                <p className="text-gray-600 line-clamp-3">{cmp.context}</p>
                <p className="text-sm text-gray-500 mt-1">City: {cmp.city}</p>
                <p className="text-sm text-gray-500">
                  {cmp.name} Needs {cmp.helpType}
                </p>
                <p className="text-gray-600 line-clamp-3">{cmp.urgency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Userdashboard;
