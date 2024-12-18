import React, { useState } from "react";
import axios from "axios";
import image11 from '../assets/images/image11.png';

const  RegistrationAgentsofCareProviders = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyType: "",
    password: "",
    yearsInBusiness: "",
    numberOfEmployees: "",
    propertiesManaged: "",
  });
  const [emailError, setEmailError] = useState("");
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address");
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      setProgress(100);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    try {
      await axios.post("", formData);
      setSuccessMessage("Registration Successful! You are now part of the PropertyConnectHub family.");
      setStep(0);
      setProgress(100);
    } catch (error) {
      alert("Registration failed");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen w-full bg-[#212727]">
      <div className="lg:flex-1 flex flex-col justify-center items-center bg-[#1762A9] p-6 lg:p-8 text-center">
        <img src={image11} alt="Welcome" className="rounded-lg shadow-lg w-3/4 lg:w-1/2 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4 mt-10">Agent for Care Provider Registeration</h1>
        <p className="text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-12">
        For agents sourcing housing for care providers, PropertyConnectHub streamlines your search process by connecting you to trusted landlords and compliant properties tailored to the care sector. Save time, access reliable listings, and focus on meeting the unique needs of your clients.
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
                <p className="mt-2">You can now access and manage the best housing opportunities for your clients.</p>
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Basic Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
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
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  >
                    <option value="">Select Company Type</option>
                    <option value="Sourcing Company">Sourcing Company</option>
                    <option value="Care Provider with a Separate Sourcing Team">Care Provider with a Separate Sourcing Team</option>
                  </select>
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
                </div>
                <button type="submit" className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full">
                  Next
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Additional Information (Optional)</h2>
                <div className="space-y-4">
                  <input
                    type="number"
                    name="yearsInBusiness"
                    placeholder="Years in Business"
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                  <input
                    type="number"
                    name="numberOfEmployees"
                    placeholder="Number of Employees"
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                  <input
                    type="number"
                    name="propertiesManaged"
                    placeholder="Properties Managed for Care Providers"
                    value={formData.propertiesManaged}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                </div>
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



export default RegistrationAgentsofCareProviders;
