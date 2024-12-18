import React, { useState } from "react";
import axios from "axios";
import img from '../assets/img/houses/house5.png';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../const/url.const";

const RegistrationLandlord = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    totalPropertiesManaged: "",
    password: "",
    interestInSelling: false,
    optionToBuy: false,
  });
  const [emailError, setEmailError] = useState("");
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address");
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please fix the errors in the form before proceeding.");
      return;
    }

    // Step 1: Send basic user data to `/auth/register`
    try {
      await axios.post(`${baseUrl}/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: "landlord", // Explicitly setting type to landlord
      });

      setStep(2);
      setProgress(50);
    } catch (error) {
      console.error(error);
      alert("Failed to register basic user details. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Step 2: Send landlord-specific data to `/auth/register-landlord`
    try {
      await axios.post(`${baseUrl}/auth/register-landlord`, {
        email: formData.email, // Assuming email is the key to link the two entities
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        totalPropertiesManaged: formData.totalPropertiesManaged,
        interestInSellingProperty: formData.interestInSelling,
        optionToBuy: formData.optionToBuy,
      });
  
      setSuccessMessage("Registration Successful! You are now part of the PropertyConnectHub family.");
      setStep(0);
      setProgress(100);
  
      // Delay navigation by 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to register landlord details. Please try again.");
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen w-full bg-[#212727]">
      <div className="lg:flex-1 flex flex-col justify-center items-center bg-[#1762A9] p-6 lg:p-8 text-center">
        <img src={img} alt="Welcome" className="rounded-lg shadow-lg w-3/4 lg:w-1/2 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4 mt-10">LandLord Registration</h1>
        <p className="text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-12">
          PropertyConnectHub is your opportunity to make a difference. By connecting with care providers and their agents, 
          you’ll not only secure stable, long-term tenants but also contribute to providing quality housing for those in need.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-lg mx-auto">
          <div className="mb-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-[#1762A9] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="text-[#212727] ml-4 text-xs sm:text-sm">{progress}% Completed</span>
            </div>

            {successMessage && (
              <div className="p-4 mb-6 bg-green-100 text-green-800 border border-green-300 rounded-md shadow-md">
                <h2 className="text-lg sm:text-2xl font-semibold">🎉 {successMessage} 🎉</h2>
                <p className="mt-2">You can now access and manage the best housing opportunities for your properties and clients.</p>
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Basic Information</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-[#1762A9]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <button type="submit" className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full">
                  Next
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Interest and Preferences</h2>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                />
                <input
                  type="number"
                  name="totalPropertiesManaged"
                  placeholder="Total Properties Managed"
                  value={formData.totalPropertiesManaged}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interestInSelling"
                    checked={formData.interestInSelling}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Interested in selling property
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="optionToBuy"
                    checked={formData.optionToBuy}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Option to buy property
                </label>
                <button type="submit" className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full">
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLandlord;
