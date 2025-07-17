import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";
const NGOdashboard=()=>{ 
    const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Campaigns", path: "/campaign" },
  ];
    return(
        <div className="flex flex-col">
            <div className="p-2"></div>
            {/* Navbar */}
            <NavbarUser/>
            {/* Main */}
            <div className="bg-white h-screen ">
                <div className="px-4 py-4 font-bold text-2xl   flex flex-col justify-center  items-center">
                    <h1 className="text-3xl">Welcome, NGO</h1>
                    <button className="bg-green-500 hover:bg-green-600 w-[300px] text-xl mt-5 text-white font-semibold px-5 py-2 rounded mb-10">
                        + Start a New Campaign
                    </button>
                </div>
                <div className=" w-[80%] h-[40%] mx-auto rounded-2xl bg-white border-b-neutral-500 border-t-neutral-500 shadow-2xl flex justify-center items-center gap-4 my-10">
                        <div className="text-gray-500 italic">
                            You haven't posted any campaigns yet.
                        </div>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Create Your Campaign
                        </button>
                </div>
                <div className="w-[80%] mx-auto mt-8">
                <h2 className="text-2xl font-bold text-[#2563EB] mb-4">Messages from Donors</h2>

                <div className="space-y-4 max-h-[300px] overflow-y-auto">
                    {/* Message Card 1 */}
                    <div className="bg-white shadow-md rounded-md p-4 border-l-4 border-blue-500">
                        <p className="text-sm text-gray-700 mb-2">
                            "We’d like to donate some winter clothes for your next drive. Please let us know the process."
                        </p>
                        <div className="text-xs text-gray-500 flex justify-between">
                            <span> — Riya Mehta </span>
                            <span>2 hours ago</span>
                        </div>
                        <button className="mt-2 text-sm text-blue-600 hover:underline">Reply</button>
                    </div>

                    {/* Message Card 2 */}
                    <div className="bg-white shadow-md rounded-md p-4 border-l-4 border-green-500">
                        <p className="text-sm text-gray-700 mb-2">
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
            </div>
        </div>
    )
}

export default NGOdashboard;