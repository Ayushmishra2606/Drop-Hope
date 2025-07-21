import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login'
import CampaignD from "./pages/CampaignD";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <>
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
 