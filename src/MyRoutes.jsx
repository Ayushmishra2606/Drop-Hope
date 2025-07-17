import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import CampaignD from "./pages/CampaignD";
import Donate from "./pages/Donate";
import ProfilePage from "./pages/Profile";

const Ngo = lazy(() => import("./pages/NGO-dashboard"));
const User = lazy(() => import("./pages/User-dashboard"));

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/user/profile' element={<ProfilePage/>}/>

      <Route
        path="/ngo"
        element={
          <Suspense
            fallback={<div className="text-center">Loading NGO...</div>}
          >
            <Ngo />
          </Suspense>
        }
      ></Route>
      <Route
        path="/user"
        element={
          <Suspense
            fallback={<div className="text-center">Loading User...</div>}
          >
            <User />
          </Suspense>
        }
      ></Route>
      <Route
          path="user/campaign/detail"
          element={
            <Suspense
              fallback={<div className="text-center">Loading Detail...</div>}
            >
              <CampaignD/>
            </Suspense>
          }
        />
        <Route
          path="/user/donate"
          element={
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Donate />
            </Suspense>
          }
        />
    </Routes>
  );
};

export default MyRoutes;
