import { useState } from "react";
import { Link } from "react-router-dom";
const NavbarUser = () =>{
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Campaigns", path: "/campaign" },
    ];
    return (
        <div className="h-[200px] flex-1 bg-[#2563EB] text-3xl  px-10 py-3 text-white flex justify-between">
                <Link to="/">
                    <h1 className="text-white font-bold">Drop<span className="text-[#1E293B]">Hope</span></h1>
                </Link>
                <div className="">
                    <ul className="flex gap-4 text-xl">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:underline">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="hover:underline">Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
    )


}
export default NavbarUser;