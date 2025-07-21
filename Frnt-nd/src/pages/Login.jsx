import React from "react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const donor = useRef();
  const beneficiary = useRef();
  const navigate = useNavigate();
  const [type, settype] = useState("user");

  const forBENE = () => {
    beneficiary.current.style.backgroundColor = "#2563EB";
    donor.current.style.backgroundColor = "white";
    settype("ngo");
  };
  const forDon = () => {
    donor.current.style.backgroundColor = "#2563EB";
    beneficiary.current.style.backgroundColor = "white";
    settype("user");
  };

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 500);
    });
  };

  const onSubmit = async (data) => {
    await delay(1);
    console.log(data);
    navigate(`/${type}`)
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center h-[43vh] sm:h-[51vh] w-[60vw] mx-auto my-[16vh]  border-white shadow-lg lg:h-[68vh]">
        <div className="flex flex-row h-[8vh] w-full m-0 rounded-md ">
          <span
            ref={donor}
            onClick={forDon}
            className="text-[#E5E7EB] font-bold bg-[#2563EB] mb-2 sm:text-2xl lg:text-3xl w-1/2 h-full text-center p-2 cursor-pointer"
          >
            Individual
          </span>
          <span
            ref={beneficiary}
            onClick={forBENE}
            className="text-[#E5E7EB] font-bold mb-2 sm:text-2xl lg:text-3xl w-1/2 h-full text-center p-2 cursor-pointer"
          >
            NGO
          </span>
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
            placeholder="email"
            className="h-[7vh] w-[65%] bg-black/20 p-2 border border-gray-300 rounded-md placeholder:p-4 placeholder:text-xl placeholder:text-[#64748B] focus:outline-none text-[#64748B] mt-[7vh]"
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
            className="sm:h-[5vw] h-[6vh] w-[65%]  bg-black/20 p-2 border border-gray-300 rounded-md mb-8 placeholder:p-4 placeholder:text-xl placeholder:text-[#64748B] focus:outline-none text-[#64748B] mt-[7vh]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <input
            type="submit"
            disabled={isSubmitting}
            value="Log in"
            className="md:h-[6vw] w-22 lg:w-[10vw] lg:h-[6vh] bg-[#7c9ee7ec] sm:text-xl rounded-xl cursor-pointer hover:bg-[#2563EB]  text-white mt-2"
          />
          <a
            href="/register"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {" "}
            don't have a account?
          </a>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
