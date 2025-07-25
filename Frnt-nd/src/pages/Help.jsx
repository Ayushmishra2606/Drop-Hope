import React from "react";
import { useForm } from "react-hook-form";
import { FaHandsHelping } from "react-icons/fa";
import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
import axios from "axios";

export default function RequestHelpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try{
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/help` , data ,{
        withCredentials:true ,
      })
      
      alert('Registered')

      reset()
    }catch(error){
      alert(error.response.data.message)

      reset()
    }
    
  };

  return (
    <>
      <div className="h-[20px]"></div>
      <NavbarUser />
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
          <div className="text-center mb-8">
            <div className="text-[#2563EB] text-4xl mb-2 flex justify-center">
              <FaHandsHelping />
            </div>
            <h2 className="text-2xl font-bold text-[#2563EB] mb-2">
              Need Help With Something?
            </h2>
            <p className="text-[#64748B] text-sm max-w-md mx-auto">
              Fill out the form below to request help for items like{" "}
              <strong>clothes</strong>, <strong>old furniture</strong>, or{" "}
              <strong>financial aid</strong>. We’ll check if any nearby
              donations match your request.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] hover:shadow-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                placeholder="Your city"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] hover:shadow-sm"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-1">
                What Help Do You Need? And Why(Context) ?
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Write a Para You want donor to See when he see's your Request"
                {...register("context", { required: "Please describe your need" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:ring-2 focus:ring-[#2563EB] hover:shadow-sm"
              />
              {errors.help && (
                <p className="text-red-500 text-sm">{errors.help.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-1">
                Type of Help
              </label>
              <div className="flex flex-wrap gap-2">
                <select
                  {...register("helpType", {
                    required: "Please select a type of help.",
                  })}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
                >
                  <option value="">-- Select an option --</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Money">Money</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                </select>
                {errors.helpType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.helpType.message}
                  </p>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Choose a type when describing your need.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-1">
                Urgency Level <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue=""
                {...register("urgency", { required: "Urgency is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="" disabled>
                  Select urgency
                </option>
                <option value="high">High (Need ASAP)</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              {errors.urgency && (
                <p className="text-red-500 text-sm">{errors.urgency.message}</p>
              )}
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-blue-700 transition-all font-medium text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
