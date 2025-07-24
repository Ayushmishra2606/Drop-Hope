import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Userdashboard = () => {
  const [username, setUsername] = useState("Guest");
  const [campaigns, setCampaigns] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/info", { withCredentials: true });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    const fetchCampaigns = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/campaigns",
          { limit: 10 },
          { withCredentials: true }
        );
        setCampaigns(response.data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchUserInfo();
    fetchCampaigns();
  }, []);

  const detail = (id) => {
    navigate(`/campaign/detail/${id}`);
  };

  const donate = () => navigate('/user/donate');
  const help = () => navigate('/user/help');
  const campaign = () => navigate('/newcampaign');

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
          <p className="font-semibold font-sans text-[#64748B]">Total Donations Made</p>
        </div>
        <div className="w-[30%] h-[100px] bg-white rounded-xl border-b-neutral-500 shadow-2xl flex items-center flex-col justify-center">
          <p className="text-3xl font-semibold">🎁 0</p>
          <p className="font-semibold font-sans text-[#64748B]">Total Items Donated</p>
        </div>
        <div className="w-[30%] h-[100px] bg-white rounded-xl border-b-neutral-500 shadow-2xl flex items-center flex-col justify-center">
          <p className="text-3xl font-semibold">⏳ 0</p>
          <p className="font-semibold font-sans text-[#64748B]">Requests Received Help</p>
        </div>
      </div>

      <div className="flex justify-center gap-14 mt-5 text-white">
        <button className="text-2xl bg-[#2563EB] rounded-2xl px-8 py-4 hover:bg-[rgb(135,169,242)]" onClick={help}>
          🤝 Request Help
        </button>
        <button className="text-2xl bg-[#F97316] rounded-2xl px-8 py-4 hover:bg-[#ff9c56]" onClick={donate}>
          Donate Now
        </button>
        <button className="text-2xl bg-[#01cf75] rounded-2xl px-8 py-4" onClick={campaign}>
          Run Your Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-10 px-10">
        {/* Left Section - Donations */}
        <div className="bg-white border-white shadow-2xl rounded-xl p-6 h-fit">
          <h1 className="font-bold px-4 py-4">Recent Donations</h1>
          <div className="px-4 py-2 space-y-4">
            <div className="flex flex-col">
              <span>No Donation Found</span>
            </div>
          </div>
        </div>

        {/* Right Section - Campaigns */}
        <div className="bg-white border-white shadow-2xl rounded-xl p-6 mb-4">
          <h1 className="font-bold px-4 py-4">Trending Campaigns</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-6">
            {campaigns.length === 0 ? (
              <p className="text-center text-gray-500">No campaigns found</p>
            ) : (
              campaigns.map((camp) => (
                <div
                  key={camp._id}
                  className="flex flex-col bg-blue-50 ml-3 rounded px-2 py-4 w-[270px] h-[340px] justify-between shadow-md hover:shadow-2xl transition duration-300"
                >
                  <span className="font-bold text-xl mb-2">{camp.title}</span>
                  <span>📍 {camp.location || "Unknown"}</span>
                  <p>{camp.desc.slice(0, 100)}...</p>
                  <span className="mb-2">Target: ₹{camp.targetAmount || 0}</span>
                  <button
                    className="bg-[#2563EB] w-full mt-2 py-2 rounded-2xl text-white font-medium"
                    onClick={() => detail(camp._id)}
                  >
                    Support Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Userdashboard;
