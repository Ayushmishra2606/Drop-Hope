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
        const response = await axios.get("http://localhost:3000/info", {
          withCredentials: true,
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
  }, []);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/myRequests",
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
  const campaign = () => navigate("/user/help");

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
          Request Help
        </button>
      </div>

      <h1 className="text-2xl font-bold text-[#2563EB] mb-4 mx-7">
        Your Requests
      </h1>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80vw]">
        {campaigns.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            You haven’t created any campaigns yet.
          </p>
        )}
        {campaigns.map((cmp, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition "
          >
            <h3 className="text-xl font-semibold text-[#2563EB]">
              Help , {cmp.name}
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

      <Footer />
    </div>
  );
};

export default Userdashboard;
