import React, { useState } from "react";
import PropertyFormPage1 from "./Upload1";
import PropertyFormPage2 from "./Upload2";
import BackArrow from "../../../assets/images/left-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { baseUrl } from "../../../const/url.const";

const RequestPropertyForm = () => {
  const careprovider = useSelector((state) => state.careProvider); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [propertyDetails, setPropertyDetails] = useState({
      userId: careprovider.id, 
      address: "",
      status: "Saved",
      propertyType: "", // E.g., "Apartment"
      numOfBedrooms: "", // E.g., 2
      isHMO: false, // Boolean value
      isArticle4: false, // Boolean value
      hmoLicense: false, // Boolean value
      fireDoor: false, // Boolean value
      fireAlarm: false, // Boolean value
      numOfReceptionRooms: "", // E.g., 1
      bathroomLocation: "", // E.g., "Upstairs"
      separateToiletLocation: "", // E.g., "Downstairs"
      numBathrooms: "", // E.g., 2
      numToilets: "", // E.g., 2
      doubleGlazing: false, // Boolean value
      centralHeating: false, // Boolean value
      furnished: "", // E.g., "Furnished"
      rentAmount: "", // E.g., 1200
      availableDate: "", // E.g., "2024-12-15T00:00:00.000Z"
      leaseTerms: [], // Array of strings, e.g., ["6 months", "12 months"]
      parkingAvailability: "", // E.g., "Available"
      accessibilityFeatures: [], // Array of strings, e.g., ["Wheelchair access"]
      propertyDescription: "", // E.g., "A spacious apartment located in the city center."
      bathroomLocationType: "", // E.g., "Upstairs"
      separateToiletLocationType: "", // E.g., "Downstairs"
      numBathroomsInLocation: "", // E.g., 1
      numToiletsInLocation: "", // E.g., 1
      postalCode: null,
      city: "",
    });
  
  
  const [currentPage, setCurrentPage] = useState(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  

// Handle Logout
const handleLogout = () => {
  dispatch(logout());    
  navigate('/login');
};

const handleSubmit = async () => {
  setIsFormSubmitted(true);
  toast.loading("Saving, please wait...");

  try {
    const authToken = localStorage.getItem("authTokenCareProvider");
    console.log("Auth Token:", authToken);

    if (!authToken) {
      alert("You are not authenticated. Please log in.");
      return;
    }

    // Transform propertyDetails to ensure correct types
    const transformRequestBody = (obj) => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (key === "status" && typeof value === "string") {
          // Ensure 'status' is an array
          acc[key] = [value];
        } else if (typeof value === "string" && (value === "true" || value === "false")) {
          // Convert boolean-like strings to actual booleans
          acc[key] = value === "true";
        } else if (typeof value === "boolean") {
          // Keep valid booleans as they are
          acc[key] = value;
        } else if (typeof value === "undefined" || value === null) {
          // Default undefined or null boolean fields to false
          acc[key] = false;
        } else if (!isNaN(value) && value !== "") {
          // Convert numeric strings to numbers
          acc[key] = parseFloat(value);
        } else if (Array.isArray(value)) {
          // Ensure arrays are properly handled
          acc[key] = value.map((item) =>
            item === "true" || item === "false"
              ? item === "true"
              : !isNaN(item) ? parseFloat(item) : item
          );
        } else {
          // Leave other fields unchanged
          acc[key] = value;
        }
        return acc;
      }, {});
    };

    // Transform the request body
    const requestBody = transformRequestBody({
      ...propertyDetails,
      status: propertyDetails.status || "Saved", // Default to "Saved" if not provided
    });

    // Log the final request body for debugging
    console.log("Request Body:", JSON.stringify(requestBody, null, 2));

    // Make the POST request with JSON
    const response = await fetch(`${baseUrl}/properties/request`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json", // Specify JSON format
      },
      body: JSON.stringify(requestBody), // Convert object to JSON string
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error: ${response.status} - ${errorMessage}`);

      if (response.status === 401) {
        // Handle unauthorized error
        alert("Your session has expired. Please log in again.");
        handleLogout();
        return;
      }

      throw new Error(`Failed to update: ${response.statusText}`);
    }

    const data = await response.json();
    toast.dismiss(); // Dismiss the loading toast
    toast.success("Property uploaded successfully!");
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.dismiss(); // Dismiss the loading toast
    toast.error(`Failed to upload the property. Please try again.`);
  }
};


  
    const getProgressBarClass = (step) => {
        return step <= currentPage ? "bg-custom-blue" : "bg-gray-300";
      };
    
      const getProgressBarWidth = () => {
        return `${((currentPage - 1) / (progressBarSteps.length - 1)) * 100}%`;
      };
    const progressBarSteps = [
      { label: "Basic Information", index: 1 },
      { label: "Additional Details", index: 2 },
    ];
  
    const progressBarStyles = {
        progressBarLine: {
          position: 'relative',
          width: '100%',
          height: '8px',
          backgroundColor: '#E0E0E0',
          borderRadius: '4px',
        },
        progressBarFill: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          backgroundColor: '#2E86AB', // Blue color
          borderRadius: '4px',
          transition: 'width 0.3s ease',
        }
      };
    
  const handleBackPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Go to the previous form page
    } else {
      // Handle redirect if needed (e.g., to the dashboard or previous page)
      console.log('You are at the first page');
    }
  };
    return (
      <>
      
        {/* Progress Bar */}
        <div className="w-11/12 mx-auto my-6">
          <h1 className="text-2xl font-bold text-center mb-8" style={{ color: "#2E86AB" }}>
            Request A Property
          </h1>
  
          <div className="flex justify-between items-center mb-4">
            {progressBarSteps.map((step) => (
              <div key={step.index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex justify-center items-center rounded-full text-white ${
                    step.index <= currentPage ? "bg-custom-blue" : "bg-gray-300"
                  }`} style={{background:'#ccc'}}
                >
                  {step.index}
                </div>
                <span className="text-xs mt-2">{step.label}</span>
              </div>
            ))}
          </div>
  
          {/* Progress Bar Line */}
          <div style={progressBarStyles.progressBarLine}>
          <div
            style={{
              ...progressBarStyles.progressBarFill,
              width: getProgressBarWidth(),
            }}
          ></div>
        </div>
      </div>
  
      {currentPage > 1 && (
        
        <img src={BackArrow} alt="back-arrow"    className="back-edit-add-btn"
        onClick={handleBackPage} />
      )}
        {/* Form Pages */}
        {currentPage === 1 && <PropertyFormPage1 onNext={handleNextPage}   propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails} />}
        {currentPage === 2 && <PropertyFormPage2 onSubmit={handleSubmit}   propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails} />}
       
  
    
      </>
    );
  }
  

export default RequestPropertyForm