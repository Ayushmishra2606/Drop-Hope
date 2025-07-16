import { useState } from "react";
import { Link } from "react-router-dom";
const NGOdashboard=()=>{ 
    const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Campaigns", path: "/campaign" },
  ];
    return(
        <div className="flex flex-col">
            {/* Navbar */}
            <div className="h-[200px] flex-1 bg-[#2563EB] text-3xl  border-r border-[#E2E8F0] px-10 py-3 text-white flex justify-between">
                <Link to="/">
                    <h1 className="text-white font-bold">Drop<span className="text-[#1E293B]">Hope</span></h1>
                </Link>
                <div className="">
                    <ul className="flex gap-2 text-xl">
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Campaigns</li>
                    </ul>
                </div>

            </div>
            {/* Main */}
            <div className="bg-gray-300 h-screen ">
                <div className="px-4 py-4 font-bold text-2xl">
                    <h1>Your Campaigns</h1>
                </div>
                <div className=" w-screen h-[400px]  border-b-neutral-500 border-t-neutral-500 shadow-2xl flex justify-center items-center">
                        <div className="flex">No current Campaigns</div>
                </div>
            </div>
        </div>
    )
}

export default NGOdashboard;