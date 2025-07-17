import React, { useState } from "react";
import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";

const Donate = () => {
  const [formData, setFormData] = useState({
    category: "Food Items",
    itemName: "",
    quantity: "",
    description: "",
    pickupAddress: "",
    contactNumber: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handlePhotoUpload = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <NavbarUser />
      <div className="max-w-3xl mx-auto px-4 py-10 text-black-800">
        <div className="text-center mb-10">
          <div className="text-4xl mb-2">💙</div>
          <h1 className="text-3xl font-bold">Make a Donation</h1>
          <p className="text-gray-600 mt-2">
            Your generosity can make a real difference. Share what you have to
            help those in need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <h1 className="text-2xl font-semibold text-blue-500">
              Donation Details
            </h1>
            <p className="text-gray-500">
              Please provide details about the items you'd like to donate
            </p>
            <label className="block font-medium py-5">Upload Item Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={handlePhotoUpload}
                className="hidden"
                id="upload"
              />
              <label htmlFor="upload" className="cursor-pointer">
                <div className="text-2xl">⬆</div>
                <p className="mt-2 text-blue-600 font-medium">Upload Photo</p>
                <p className="text-sm text-gray-500">
                  Help NGOs see what you're donating
                </p>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Category</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Food Items",
                "Clothing",
                "Books & Stationery",
                "Electronics",
                "Toys & Games",
                "Other",
              ].map((cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={formData.category === cat}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g., Rice bags, Winter jackets"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g., 5 bags, 10 pieces"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded px-3 py-2"
              placeholder="Additional details about the items (condition, expiry date, etc.)"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold text-lg text-blue-600 mb-3">
              📍 Pickup Information
            </h3>
            <div className="mb-4">
              <label className="block font-medium mb-1">Pickup Address</label>
              <input
                type="text"
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Full address where items can be collected"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Phone number for pickup coordination"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Submit Donation Request
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="font-semibold mb-1">Submit Request</h4>
            <p className="text-gray-600 text-sm">
              Fill out the donation form with item details
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-semibold mb-1">NGO Contact</h4>
            <p className="text-gray-600 text-sm">
              A verified NGO will reach out to you
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-semibold mb-1">Pickup Arranged</h4>
            <p className="text-gray-600 text-sm">
              Items are collected from your location
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Donate;
