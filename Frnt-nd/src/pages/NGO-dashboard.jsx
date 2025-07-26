import Footer from "../components/Footer";
import NavbarNgo from "../components/NavbarNgo";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NGOdashboard = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Campaigns", path: "/campaign" },
  ];

  const [username, setUsername] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/info`,
          { withCredentials: true }
        );
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUsername("Guest");
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/mycampaigns`,
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

  const campaign = () => {
    navigate("newcampaign");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to remove your campaign?");
    if (confirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}/api/deleteCmp/${id}`,
          { withCredentials: true }
        );
        // Refresh campaigns
        setCampaigns((prev) => prev.filter((cmp) => cmp._id !== id));
      } catch (error) {
        console.log("Failed to delete campaign:", error);
      }
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      <div className="h-[20px]"></div>
      <NavbarNgo />
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {username}</h1>
        <button
          onClick={campaign}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-lg font-medium transition"
        >
          + Start a New Campaign
        </button>
      </div>

      <div className="w-full bg-[#1D4ED8] py-10 px-4">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          Your Campaigns
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.length === 0 ? (
            <p className="col-span-full text-center text-white/80 text-lg">
              You haven’t created any campaigns yet.
            </p>
          ) : (
            campaigns.map((cmp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">{cmp.title}</h3>
                <p className="text-gray-700 text-sm line-clamp-3">{cmp.desc}</p>

                <div className="text-sm text-gray-600 mt-4 space-y-1">
                  <p><span className="font-semibold">City:</span> {cmp.city}</p>
                  <p><span className="font-semibold">Target:</span> ₹{cmp.target}</p>
                </div>

                <button
                  onClick={() => handleDelete(cmp._id)}
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Delete Campaign
                </button>
              </div>
            ))
          )}
        </div>
      </div>


      <div className="w-full max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Messages from Donors
        </h2>
        <div className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 pr-2">
          <div className="bg-white shadow-sm rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-gray-800 text-sm mb-2">
              "We’d like to donate some winter clothes for your next drive. Please let us know the process."
            </p>
            <div className="text-xs text-gray-500 flex justify-between">
              <span>— Riya Mehta</span>
              <span>2 hours ago</span>
            </div>
            <button className="mt-2 text-sm text-blue-600 hover:underline">Reply</button>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-gray-800 text-sm mb-2">
              "Thank you for organizing the food drive. We'd love to collaborate again next month!"
            </p>
            <div className="text-xs text-gray-500 flex justify-between">
              <span>— Akshay Sharma</span>
              <span>1 day ago</span>
            </div>
            <button className="mt-2 text-sm text-blue-600 hover:underline">Reply</button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default NGOdashboard;
