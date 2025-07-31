import Footer from "../components/Footer";
import NavbarNgo from "../components/NavbarNgo";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        toast.error("Could not fetch your campaigns.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [campaigns]);

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

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to Remove Your Campaign?"
    );

    if (confirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}/api/deleteCmp/${id}`,
          { withCredentials: true }
        );

        toast("Your campaign Has Been Removed")

      } catch (error) {
        toast.error("Server Error , Try again later")
        console.log("Failed to delete campaign:", error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-2"></div>

      <NavbarNgo />
      <div className="text-2xl italic mt-5 mx-25 w-[15%] font-bold"></div>

      <div className="bg-white h-screen ">
        <div className="px-4 py-4 font-bold text-2xl   flex flex-col justify-center  items-center">
          <h1 className="text-3xl">Welcome , {username}</h1>
          <button
            className="bg-green-500 hover:bg-green-600 w-[300px] text-xl mt-5 text-white font-semibold px-5 py-2 rounded mb-10"
            onClick={campaign}
          >
            + Start a New Campaign
          </button>
        </div>

        <div className="flex flex-col items-center px-4 py-8">
          <h1 className="text-3xl font-bold text-[#2563EB] mb-6 text-center">
            Your Campaigns
          </h1>

          <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 text-lg">
                You haven’t created any campaigns yet.
              </p>
            ) : (
              campaigns.map((cmp, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-[#2563EB] mb-2">
                      {cmp.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-2">{cmp.desc}</p>
                    <p className="text-sm text-gray-500">City: {cmp.city}</p>
                    <p className="text-sm text-gray-500">Target: ₹{cmp.target}</p>
                  </div>

                  <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition uppercase font-medium"
                    onClick={() => handleDelete(cmp._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>


        <div className="w-[80%] mx-auto mt-8">
          <h2 className="text-2xl font-bold text-[#2563EB] mb-4">
            Messages from Donors
          </h2>

          <div className="space-y-4 max-h-[300px] overflow-y-scrool scroolbar-hide">
            <div className="bg-white shadow-md rounded-md p-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 mb-2">
                "We’d like to donate some winter clothes for your next drive.
                Please let us know the process."
              </p>
              <div className="text-xs text-gray-500 flex justify-between">
                <span> — Riya Mehta </span>
                <span>2 hours ago</span>
              </div>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                Reply
              </button>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 border-l-4 border-green-500">
              <p className="text-sm text-gray-700 mb-2">
                "Thank you for organizing the food drive. We'd love to
                collaborate again next month!"
              </p>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>— Akshay Sharma</span>
                <span>1 day ago</span>
              </div>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NGOdashboard;
