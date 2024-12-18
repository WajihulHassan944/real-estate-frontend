import React, { useState } from "react";
import PropertyFormPage1 from "./Upload1";
import PropertyFormPage2 from "./Upload2";
import BackArrow from "../../../assets/images/left-arrow.png";

const RequestPropertyForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handleSubmit = () => {
      setIsFormSubmitted(true);
      alert("Form submitted successfully!");
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
        {currentPage === 1 && <PropertyFormPage1 onNext={handleNextPage} />}
        {currentPage === 2 && <PropertyFormPage2 onSubmit={handleSubmit} />}
       
  
    
      </>
    );
  }
  

export default RequestPropertyForm