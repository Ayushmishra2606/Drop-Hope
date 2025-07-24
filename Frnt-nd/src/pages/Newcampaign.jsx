import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import NavbarNgo from "../components/NavbarNgo";
import axios from "axios";

export default function CreateCampaignForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const data = new FormData();

    data.append("title", formData.title);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("city", formData.city);
    data.append("target", formData.target);
    data.append("image", formData.image[0]);

    try {
      await axios.post("http://localhost:3000/campaign/upload",data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("Campaign Registered , your Campaign Will be On Shortly");
    } catch (error) {

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";
      alert(message);
    }
    reset();
  };

  return (
    <>
      <NavbarNgo />
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-[#2563EB] mb-6">
            Create a Campaign
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Campaign Title"
                {...register("title", { required: "Title is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                Your Name or your Organization Nmae
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Describe your campaign..."
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your City"
                {...register("city", { required: "City is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                Target Amount (₹)<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter target amount"
                {...register("target", {
                  required: "Target amount is required",
                  min: { value: 1, message: "Target must be at least ₹1" },
                })}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
              {errors.target && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.target.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#64748B] font-medium mb-1">
                Upload Photo<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image", {
                  required: "Campaign photo is required",
                })}
                className="w-full file:bg-[#2563EB] file:text-white file:border-0 file:px-4 file:py-2 file:rounded file:cursor-pointer border border-gray-300 rounded px-2 py-2"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded text-lg transition-all"
              >
                Run Your Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
