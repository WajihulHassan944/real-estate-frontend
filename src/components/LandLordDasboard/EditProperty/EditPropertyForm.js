import React, { useEffect, useState } from "react";
import PropertyFormPage1 from "./Upload1";
import PropertyFormPage2 from "./Upload2";
import PropertyFormPage3 from "./Upload3";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/authSlice";
import { baseUrl } from "../../../const/url.const";
import { toast } from 'react-toastify';
import BackArrow from "../../../assets/images/left-arrow.png";
function EditPropertyForm({propertyId , onUpdateSuccess}) {
  const landlord = useSelector((state) => state.landlord); // Access landlord details from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [propertyDetails, setPropertyDetails] = useState({
    userId: landlord.id, // This will be dynamically set
    address: "",
    status: "Active",
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
    photos: [], // Array of File objects, e.g., ["uploads\\1734086148870-download (7).png"]
    inventory: [], // Array of File objects
    floorPlans: [], // Array of File objects
    epc: [], // Array of File objects
    gasCertificate: [], // Array of File objects
    eicr: [], // Array of File objects
    insurance: [], // Array of File objects
    bathroomLocationType: "", // E.g., "Upstairs"
    separateToiletLocationType: "", // E.g., "Downstairs"
    numBathroomsInLocation: "", // E.g., 1
    numToiletsInLocation: "", // E.g., 1
   
  }); 


  useEffect(() => {
    const fetchPropertyData = async () => {
      const token = localStorage.getItem('authToken');  // Retrieve the token from localStorage

      try {
        const response = await fetch(`${baseUrl}/properties/${propertyId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Add token to the Authorization header
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        // Update state with fetched property data
        if (response.ok) {
          setPropertyDetails((prevDetails) => ({
            ...prevDetails,
            ...data,
          }));
        } else {
          console.error("Error fetching property data:", data);
        }
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchPropertyData();
  }, [propertyId]);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3)); // Ensure it doesn't exceed 3
  };

  
  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());    
    navigate('/login');
  };


  const handleSubmit = async (propertyId) => {
    setIsFormSubmitted(true);
   toast.loading("Saving please wait...");
     
    try {
      const authToken = localStorage.getItem("authToken");
      console.log("Auth Token:", authToken);
  
      if (!authToken) {
        alert("You are not authenticated. Please log in.");
        return;
      }
  
      const formData = new FormData();
  
      // Append updated property details to FormData
      Object.entries(propertyDetails).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // If the value is an array, append each item individually
          value.forEach((item) => {
            if (item instanceof File) {
              formData.append(key, item); // Append file arrays (e.g., photos, floorPlans)
            } else {
              formData.append(key, item); // Simple arrays (e.g., leaseTerms, accessibilityFeatures)
            }
          });
        }else if (typeof value === "boolean") {
          // Convert booleans to strings
          formData.append(key, value.toString());
        } else if (value instanceof File) {
          formData.append(key, value); // Single file (e.g., epc, gasCertificate)
        } else {
          formData.append(key, value || ""); // Simple key-value pairs
        }
      });
  
      // Log FormData content for debugging
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
  
      // Make the PUT request
      const response = await fetch(`${baseUrl}/properties/${propertyId.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
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
              toast.success("Property updated successfully!");
     
      console.log("Response from server:", data);
      if (onUpdateSuccess) {
        onUpdateSuccess();
      }
    } catch (error) {
      console.error("Error updating property:", error);
       toast.dismiss(); // Dismiss the loading toast
              toast.error(`Failed to update the property. Please try again.`);
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
    { label: "Media Uploads", index: 3 },
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
          Edit Your Property {propertyId}
        </h1>

        <div className="flex justify-between items-center mb-4">
          {progressBarSteps.map((step) => (
            <div key={step.index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-full text-white ${getProgressBarClass(step.index)}` }
                style={{background:'#ccc'}}
              >
                {step.index}
              </div>
              <span className="text-xs mt-2 text-center">{step.label}</span>
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
      {currentPage === 1 && (
        <PropertyFormPage1
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
          onNext={handleNextPage}
        />
      )}
      {currentPage === 2 && (
        <PropertyFormPage2
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
          onNext={handleNextPage}
        />
      )}
      {currentPage === 3 && (
        <PropertyFormPage3
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
          onSubmit={handleSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      )}
    </>
  );
}

export default EditPropertyForm;
