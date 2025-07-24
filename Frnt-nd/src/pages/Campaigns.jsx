import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Campaigns = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users on mount
    async function fetchUsers(limit = 10) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/campaigns",
          { limit },
          { withCredentials: true } // important for sending cookies
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <NavbarUser />
      <div className="w-[80vw] h-[60vh] flex flex-row gap-20">
        {users.map((user) => (
          <div className="card bg-amber-100 h-7 w-8" key={user._id}>
            <h2>{user.name}</h2>
            {/* <img src={`https://firebasestorage.googleapis.com/v0/b/ayush-901e4.firebasestorage.app/o/${user.image}
`} alt="Image" /> */}
            <p>{user.city}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Campaigns;
