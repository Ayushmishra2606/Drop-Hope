import React from "react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const donor = useRef();
  const beneficiary = useRef();
  const navigate = useNavigate();
  const [type, settype] = useState("user");

  const forDon = () => {
    settype("user");
  };

  const forBENE = () => {
    settype("ngo");
  };

  const onSubmit = async (data) => {
    try {
      const endpoint = type === "ngo" ? `${import.meta.env.VITE_API_BASE_URL}/ngo/login` : `${import.meta.env.VITE_API_BASE_URL}/user/login`;
      const response = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {


        if (type === "ngo") {
          navigate("/ngo");
        } else {
          navigate("/user");
        }
      } else {
        const error = await response.json();
        toast.error(error.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      toast.error("Login Failed due to network or server error.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-[43vh] sm:h-[51vh] w-[60vw] mx-auto my-[16vh]  border-white shadow-lg lg:h-[68vh]">
        <div className="flex w-full justify-center my-6">
          <div className="bg-gray-200 rounded-full p-1 flex w-[65%]">
            <button
              onClick={forDon}
              className={`w-1/2 text-center py-2 sm:text-xl rounded-full transition-all duration-300 ${type === "user" ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
            >
              Individual
            </button>
            <button
              onClick={forBENE}
              className={`w-1/2 text-center py-2 sm:text-xl rounded-full transition-all duration-300 ${type === "ngo" ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
            >
              NGO
            </button>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center"
        >
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="h-[7vh] w-[65%] bg-white p-2 border border-gray-300 rounded-md placeholder:p-4 placeholder:text-xl placeholder:text-[#64748B] focus:outline-none text-[#64748B] mt-[7vh]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            type="password"
            {...register(
              "password",
              {
                pattern: {
                  value: /[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>?,./~`-]{7,17}$/,
                  message: "Invalid Format",
                },
              },
              {
                required: { value: true, message: "please Enter the password" },
              }
            )}
            placeholder="Password"
            className="sm:h-[5vw] h-[7vh] w-[65%]  bg-white p-2 border border-gray-300 rounded-md mb-8 placeholder:p-4 placeholder:text-xl placeholder:text-[#64748B] focus:outline-none text-[#64748B] mt-[7vh]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <input
            type="submit"
            disabled={isSubmitting}
            value="Log in"
            className="md:h-[6vw] w-22 lg:w-[10vw] lg:h-[6vh] bg-[#7c9ee7ec] sm:text-xl rounded-xl cursor-pointer hover:bg-[#2563EB]  text-white mt-2 mb-10"
          />
          <a
            href="/register"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {" "}
            don't have an account?
          </a>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;