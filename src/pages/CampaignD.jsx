import React from "react";
import pic from "../assets/boypic.png";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const CampaignD = () => {
  return (
    <>
      <div className="w-screen h-screen m-0 p-0">
        <NavbarUser />
        <div className="w-[75%] h-[80%] shadow-2xl mx-auto mt-9 flex lg:flex-row flex-col lg:gap-5 gap-3 max-lg:justify-center max-lg:items-center">
          <div className="w-2/5 lg:h-full h-2/5">
            <img
              src={pic}
              alt="pic"
              className="w-[100%] h-[80%] object-contain mt-7 mx-3"
            />
          </div>
          <div className="w-3/5 h-full flex flex-col mx-7">
            <h1 className="text-4xl text-[#aec1ccc9] font-bold lg:mt-7 mt-3">
              Fund Litracy
            </h1>
            <h3 className="text-2xl text-[#b1b4b9] font-semibold mt-5">
              Help Me Study Medicine In SingaPore
            </h3>
            <h2 className="text-xl text-[#b1b4b9]">📍 Patna, Bihar</h2>
            <div className="text-sm text-[#b1b4b9]"><span>Target- ₹50,000</span><span className="mx-6">Recieved - ₹______</span></div>
            <p className="text-md text-[#b1b4b9] font-[20] mt-5 line-clamp-9">
              Hello, I'm Binod, a hopeful student from rural Bihar. Recently, I
              received a life-changing scholarship to study medicine in
              Singapore — a huge step toward fulfilling my dream of becoming a
              doctor and giving back to my community. While tuition is covered,
              I urgently need ₹50,000 to manage my flight and initial stay for a
              month. My family has done all they can, but I now turn to you for
              support. Every small contribution brings me closer to my goal and
              makes a big difference. Thank you for your kindness and for
              standing by a dream that could change many lives
            </p>
            <button className="h-[40px] w-[130px] bg-[#22C55E] rounded-md mt-6 text-[#d1dcef] hover:bg-[#90feb8] ">
              Donate Now
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CampaignD;
