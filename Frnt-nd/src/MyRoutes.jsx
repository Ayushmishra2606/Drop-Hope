import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ProfilePage from "./pages/Profile";
import RequestHelpForm from "./pages/Help";
import ProfileNGO from "./pages/Profilengo";

const Ngo = lazy(() => import("./pages/NGO-dashboard"));
const User = lazy(() => import("./pages/User-dashboard"));
const Newcampaign = lazy(() => import("./pages/Newcampaign"));
const CampaignD = lazy(() => import("./pages/CampaignD"));
const Donations = lazy(() => import('./pages/Donation'))
const Campaign = lazy(()=> import('./pages/Campaigns'))

import ProtectedRoute from "./components/ProtectedRoutes"; 


const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      
      <Route path="/user/profile" element={<ProfilePage />} />
      <Route path="/ngo/profile" element={<ProfileNGO />} />
      <Route path="/user/help" element={<RequestHelpForm />} />

      <Route
        path="/ngo"
        element={
          <ProtectedRoute allowedRoles={["ngo"]}> {/* Pass allowedRoles */}
            <Suspense
              fallback={<div className="text-center">Loading NGO...</div>}
            >
              <Ngo />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["individual"]}> 
            <Suspense
              fallback={<div className="text-center">Loading User...</div>}
            >
              <User />
            </Suspense>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="user/campaign/detail"
        element={
          <ProtectedRoute allowedRoles={["individual"]}>
            <Suspense
              fallback={<div className="text-center">Loading Detail...</div>}
            >
              <CampaignD />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/donate"
        element={
          <ProtectedRoute allowedRoles={["individual"]}>
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Donations />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/campaigns"
        element={
          <ProtectedRoute allowedRoles={["individual"]}>
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Campaign />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/newcampaign"
        element={
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Newcampaign />
            </Suspense>
        }
      />
    </Routes>
  );
};

export default MyRoutes;