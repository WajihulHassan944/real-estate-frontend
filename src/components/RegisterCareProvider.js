import React, { useState } from "react";
import img from '../assets/img/houses/house4.png';
import axios from "axios";
import { baseUrl } from "../const/url.const";
import { useNavigate } from "react-router-dom";

const RegistrationCareProvider = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactName: "",
    email: "",
    password: "",
    telephoneNumber: "",
    typeOfProvider: "",
    yearsInOperation: "",
    numberOfEmployees: "",
    cqcRatings: "",
    city: "",
    careRecipients: "",
    companyName: "",
    companyRegisteredAddress: "",
    companyAddressDifferent: "",
    companyEmailAddress: "",
    companyNumber: "",
    mainContactName: "",
    mainContactNumber: "",
  });
  
  const [emailError, setEmailError] = useState("");
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "yearsInOperation" || name === "numberOfEmployees" ? parseInt(value, 10) || 0 : value,
    }));
  
    // Email validation check
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };
  


  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      setProgress(50); // Adjust progress to reflect the addition of a third step
    } else if (step === 2) {
      setStep(3);
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
      // Step 1: Send basic care provider data to `/auth/register`
      await axios.post(`${baseUrl}/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: "careprovider",
      });
  
      await axios.post(`${baseUrl}/auth/register-careprovider`, {
        email: formData.email, // Assuming email is the key to link the two entities
        address: formData.address,
        contactName: formData.contactName,
        telephoneNumber: formData.telephoneNumber,
        typeOfProvider: formData.typeOfProvider,
        yearsInOperation: parseInt(formData.yearsInOperation, 10),
        numberOfEmployees: parseInt(formData.numberOfEmployees, 10),
        cqcRatings: formData.cqcRatings,
        city: formData.city,
        careRecipients: formData.careRecipients,
        companyName: formData.companyName,
        companyRegisteredAddress: formData.companyRegisteredAddress,
        companyAddressDifferent: formData.companyAddressDifferent,
        companyEmailAddress: formData.companyEmailAddress,
        companyNumber: formData.companyNumber,
        mainContactName: formData.mainContactName,
        mainContactNumber: formData.mainContactNumber,
        type: "careprovider",
      });

      setSuccessMessage("Registration Successful! Welcome to the CareConnect family.");
      setStep(0);
      setProgress(100);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to register care provider details. Please try again.");
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen w-full bg-[#212727]">
      {/* Left Side */}
      <div className="lg:flex-1 flex flex-col justify-center items-center bg-[#1762A9] p-6 lg:p-8 text-center">
        <img
          src={img}
          alt="Welcome"
          className="rounded-lg shadow-lg w-3/4 lg:w-1/2 mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4 mt-10">Care Provider Registeration</h1>
        <p className="text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-12">
         At PropertyConnectHub, we know that your focus is on care, not navigating housing challenges.
          That’s why we connect you directly to a network of reliable landlords who understand your
          standards.
        </p>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-lg mx-auto">
          <div className="mb-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-[#1762A9] h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-[#212727] ml-4 text-xs sm:text-sm">{progress}% Completed</span>
            </div>

            {successMessage && (
              <div className="p-4 mb-6 bg-green-100 text-green-800 border border-green-300 rounded-md shadow-md">
                <h2 className="text-lg sm:text-2xl font-semibold">🎉 {successMessage} 🎉</h2>
                <p className="mt-2">You can now explore the best housing options.</p>
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Basic Information</h2>
                <div className="space-y-4">
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
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
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
                <button
                  type="submit"
                  className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full"
                >
                  Next
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">Additional Information</h2>
                <div className="space-y-4">
                   <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                    <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                
                     <input
                    type="tel"
                    name="telephoneNumber"
                    placeholder="Telephone Number"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
                  
                   <select
                    name="typeOfProvider"
                    value={formData.typeOfProvider}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  >
                    <option value="">Select Provider Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Specialist">Specialist</option>
                  </select>
                </div>
              
                <select
  name="careRecipients"
  onChange={handleChange}
  value={formData.careRecipients}
  required
  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
>
  <option value="">Who do you provide care for?</option>
  <option value="MentalHealth">Individuals with Mental Health Issues</option>
  <option value="SubstanceUseDisorders">Individuals with Substance Use Disorders</option>
  <option value="ChildrenYoungPeople">Children and Young People</option>
  <option value="DomesticAbuseSurvivors">Survivors of Domestic Abuse</option>
  <option value="OlderAdults">Older Adults</option>
  <option value="PhysicalDisabilities">Individuals with Physical Disabilities</option>
  <option value="LearningDisabilities">Individuals with Learning Disabilities</option>
  <option value="Homelessness">People Experiencing Homelessness</option>
  <option value="ExOffenders">Ex-Offenders</option>
  <option value="AsylumRefugees">Asylum Seekers and Refugees</option>
  <option value="Veterans">Veterans</option>
  <option value="YoungParents">Young Parents</option>
  <option value="AutismSpectrum">Individuals with Autism Spectrum Disorders</option>
  <option value="HIVAIDS">Individuals with HIV/AIDS</option>
  <option value="SensoryImpairments">People with Sensory Impairments</option>
  <option value="ChronicIllnesses">Individuals with Chronic Illnesses</option>
  <option value="LGBTQ">LGBTQ+ Individuals</option>
  <option value="DualDiagnoses">Individuals with Dual Diagnoses</option>
  <option value="HumanTraffickingSurvivors">Survivors of Human Trafficking</option>
  <option value="BehavioralDisorders">Individuals with Behavioral Disorders</option>
</select>



{/* City */}
<div>
  <select
    className="w-full border rounded-lg p-2"
    name="city"
    value={formData.city}
    onChange={handleChange}
    required
  >
    <option value="">City of Operation</option>
    <optgroup label="England">
      <option value="Bath">Bath</option>
      <option value="Birmingham">Birmingham*</option>
      <option value="Bradford">Bradford*</option>
      <option value="Brighton & Hove">Brighton & Hove</option>
      <option value="Bristol">Bristol*</option>
      <option value="Cambridge">Cambridge</option>
      <option value="Canterbury">Canterbury*</option>
      <option value="Carlisle">Carlisle</option>
      <option value="Chelmsford">Chelmsford</option>
      <option value="Chester">Chester*</option>
      <option value="Chichester">Chichester</option>
      <option value="Colchester">Colchester</option>
      <option value="Coventry">Coventry*</option>
      <option value="Derby">Derby</option>
      <option value="Doncaster">Doncaster</option>
      <option value="Durham">Durham</option>
      <option value="Ely">Ely</option>
      <option value="Exeter">Exeter*</option>
      <option value="Gloucester">Gloucester</option>
      <option value="Hereford">Hereford</option>
      <option value="Kingston-upon-Hull">Kingston-upon-Hull*</option>
      <option value="Lancaster">Lancaster</option>
      <option value="Leeds">Leeds*</option>
      <option value="Leicester">Leicester*</option>
      <option value="Lichfield">Lichfield</option>
      <option value="Lincoln">Lincoln</option>
      <option value="Liverpool">Liverpool*</option>
      <option value="London">London*</option>
      <option value="Manchester">Manchester*</option>
      <option value="Milton Keynes">Milton Keynes</option>
      <option value="Newcastle-upon-Tyne">Newcastle-upon-Tyne*</option>
      <option value="Norwich">Norwich*</option>
      <option value="Nottingham">Nottingham*</option>
      <option value="Oxford">Oxford*</option>
      <option value="Peterborough">Peterborough</option>
      <option value="Plymouth">Plymouth*</option>
      <option value="Portsmouth">Portsmouth*</option>
      <option value="Preston">Preston</option>
      <option value="Ripon">Ripon</option>
      <option value="Salford">Salford</option>
      <option value="Salisbury">Salisbury</option>
      <option value="Sheffield">Sheffield*</option>
      <option value="Southampton">Southampton*</option>
      <option value="Southend-on-Sea">Southend-on-Sea</option>
      <option value="St Albans">St Albans</option>
      <option value="Stoke on Trent">Stoke on Trent*</option>
      <option value="Sunderland">Sunderland</option>
      <option value="Truro">Truro</option>
      <option value="Wakefield">Wakefield</option>
      <option value="Wells">Wells</option>
      <option value="Westminster">Westminster*</option>
      <option value="Winchester">Winchester</option>
      <option value="Wolverhampton">Wolverhampton</option>
      <option value="Worcester">Worcester</option>
      <option value="York">York*</option>
    </optgroup>
    <optgroup label="Northern Ireland">
      <option value="Armagh">Armagh*</option>
      <option value="Bangor">Bangor</option>
      <option value="Belfast">Belfast*</option>
      <option value="Lisburn">Lisburn</option>
      <option value="Londonderry">Londonderry</option>
      <option value="Newry">Newry</option>
    </optgroup>
    <optgroup label="Scotland">
      <option value="Aberdeen">Aberdeen*</option>
      <option value="Dundee">Dundee*</option>
      <option value="Dunfermline">Dunfermline</option>
      <option value="Edinburgh">Edinburgh*</option>
      <option value="Glasgow">Glasgow*</option>
      <option value="Inverness">Inverness</option>
      <option value="Perth">Perth</option>
      <option value="Stirling">Stirling</option>
    </optgroup>
    <optgroup label="Wales">
      <option value="Bangor">Bangor</option>
      <option value="Cardiff">Cardiff*</option>
      <option value="Newport">Newport</option>
      <option value="St Asaph">St Asaph</option>
      <option value="St Davids">St Davids</option>
      <option value="Swansea">Swansea*</option>
      <option value="Wrexham">Wrexham</option>
    </optgroup>
  </select>
</div>
                <button
                  type="submit"
                  className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full"
                >
                  Next
                </button>
              </form>
            )}




{step === 3 && (
  <form onSubmit={handleSubmit} className="space-y-4">
    <h2 className="text-lg sm:text-2xl font-semibold text-[#212727] mb-4 text-center">
      Additional Information
    </h2>
   <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
        placeholder="Company Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
      <input
        type="text"
        id="companyRegisteredAddress"
        name="companyRegisteredAddress"
        value={formData.companyRegisteredAddress}
        onChange={handleChange}
        required
        placeholder="Company Registered Address"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
      <input
        type="text"
        id="companyAddressDifferent"
        name="companyAddressDifferent"
        value={formData.companyAddressDifferent}
        onChange={handleChange}
        placeholder="Company Address (If Different for Communication)"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
   
      <input
        type="email"
        id="companyEmailAddress"
        name="companyEmailAddress"
        value={formData.companyEmailAddress}
        onChange={handleChange}
        required
        placeholder="Company Email Address"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
   
      <input
        type="text"
        id="companyNumber"
        name="companyNumber"
        value={formData.companyNumber}
        onChange={handleChange}
        required
        placeholder="Company Registration Number"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
      <input
        type="text"
        id="mainContactName"
        name="mainContactName"
        value={formData.mainContactName}
        onChange={handleChange}
        required
        placeholder="Main Contact Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
   
    <input
        type="tel"
        id="mainContactNumber"
        placeholder="Main Contact Number"
        name="mainContactNumber"
        value={formData.mainContactNumber}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
      />
    <input
                    type="number"
                    name="yearsInOperation"
                    placeholder="Years in Operation"
                    value={formData.yearsInOperation}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1762A9]"
                  />
             <input
                    type="text"
                    name="cqcRatings"
                    placeholder="CQC Ratings"
                    value={formData.cqcRatings}
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
    <button
      type="submit"
      className="mt-6 p-3 bg-[#1762A9] text-white font-bold rounded-md w-full"
    >
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

export default RegistrationCareProvider;
