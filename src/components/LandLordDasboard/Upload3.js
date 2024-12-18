import React, { useState, useEffect } from "react";

const PropertyFormPage3 = ({
  propertyDetails,
  setPropertyDetails,
  onSubmit,
  isFormSubmitted,
}) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset errors when form is submitted or reset
    if (isFormSubmitted) {
      setErrors({});
    }
  }, [isFormSubmitted]);

  const handleFileUpload = (e, fileCategory, maxFiles, maxFileSize) => {
    const files = Array.from(e.target.files);
    const exceededMaxFiles = files.length > maxFiles;
    const exceededMaxFileSize = files.some((file) => file.size > maxFileSize);

    if (exceededMaxFiles || exceededMaxFileSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fileCategory]: "Error: Exceeded maximum files or file size",
      }));
    } else {
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        [fileCategory]: [...(prevDetails[fileCategory] || []), ...files],
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("dragover");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("dragover");
  };

  const handleDrop = (e, fileCategory, maxFiles, maxFileSize) => {
    e.preventDefault();
    e.target.classList.remove("dragover");
    const files = Array.from(e.dataTransfer.files);
    const exceededMaxFiles = files.length > maxFiles;
    const exceededMaxFileSize = files.some((file) => file.size > maxFileSize);

    if (exceededMaxFiles || exceededMaxFileSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fileCategory]: "Error: Exceeded maximum files or file size",
      }));
    } else {
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        [fileCategory]: [...(prevDetails[fileCategory] || []), ...files],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formErrors = {};
  
    // Validate required fields
    if (!propertyDetails.photos || propertyDetails.photos.length === 0) {
      formErrors.photos = "Property images are required.";
    }
  
    if (
      (propertyDetails.furnished === "Furnished" || propertyDetails.furnished === "Partly Furnished") &&
      (!propertyDetails.inventory || propertyDetails.inventory.length === 0)
    ) {
      formErrors.inventory = "Inventory files are required.";
    }
  
    if (!propertyDetails.floorPlans || propertyDetails.floorPlans.length === 0) {
      formErrors.floorPlans = "Floor plan images are required.";
    }
  
    if (!propertyDetails.epc || propertyDetails.epc.length === 0) {
      formErrors.epc = "EPC is required.";
    }
  
    if (!propertyDetails.gasCertificate || propertyDetails.gasCertificate.length === 0) {
      formErrors.gasCertificate = "Gas certificate is required.";
    }
  
    if (!propertyDetails.eicr || propertyDetails.eicr.length === 0) {
      formErrors.eicr = "EICR is required.";
    }
  
    if (!propertyDetails.insurance || propertyDetails.insurance.length === 0) {
      formErrors.insurance = "Insurance is required.";
    }
  
    // If there are validation errors, update state and stop submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    // No errors, submit to parent
    onSubmit(propertyDetails);
  };
  

  const renderUploadedFiles = (files) => {
    return (
      <ul className="mt-2 text-sm text-gray-600">
        {files.map((file, index) => (
          <li key={index} className="truncate">
            {file.name}
          </li>
        ))}
      </ul>
    );
  };

  const renderFileInput = (label, fileCategory, maxFiles, maxFileSize, acceptedTypes, helperText) => (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, fileCategory, maxFiles, maxFileSize)}
        onClick={() => document.getElementById(`${fileCategory}Input`).click()}
      >
        <p className="text-gray-600">Drag and drop files here, or click to upload</p>
        <input
          id={`${fileCategory}Input`}
          type="file"
          accept={acceptedTypes}
          multiple
          className="hidden"
          onChange={(e) => handleFileUpload(e, fileCategory, maxFiles, maxFileSize)}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">{helperText}</p>
      {errors[fileCategory] && (
        <p className="text-sm text-red-500 mt-2">{errors[fileCategory]}</p>
      )}
      {renderUploadedFiles(propertyDetails[fileCategory] || [])}
    </div>
  );

  return (
    <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
      {/* Alerts for Validation Errors */}
{Object.keys(errors).length > 0 && (
  <div className="mb-4">
    {Object.entries(errors).map(([field, errorMessage]) => (
      <div
        key={field}
        className="text-red-600 bg-red-100 border border-red-400 rounded p-2 mb-2"
      >
        {errorMessage}
      </div>
    ))}
  </div>
)}

      <form onSubmit={handleSubmit} className="space-y-8">
        {renderFileInput(
          "Upload Property Images",
          "photos",
          10,
          10 * 1024 * 1024,
          ".jpeg,.jpg,.png",
          "Accepted file types: JPEG, PNG. Max file size: 10MB per file. Max uploads: 10 photos."
          
        )}

        {renderFileInput(
          "Upload Floor Plan Images",
          "floorPlans",
          10,
          10 * 1024 * 1024,
         ".jpeg,.jpg,.png",
          "Accepted file types: JPEG, PNG. Max file size: 10MB per file."
        )}


{/* Conditional File Input */}
{(propertyDetails.furnished === "Furnished" || propertyDetails.furnished === "Partly Furnished") && (
  renderFileInput(
    "Upload inventory",
    "inventory",
    10,
    10 * 1024 * 1024,
    ".jpeg,.jpg,.png",
    "Accepted file types: JPEG, PNG. Max file size: 10MB per file."
  )
)}

        {renderFileInput(
          "Upload EPC",
          "epc",
          5,
          5 * 1024 * 1024,
         ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload Gas Certificate",
          "gasCertificate",
          5,
          5 * 1024 * 1024,
         ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload EICR",
          "eicr",
          5,
          5 * 1024 * 1024,
         ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload Insurance",
          "insurance",
          5,
          5 * 1024 * 1024,
         ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, JPEG, PNG. Max file size: 5MB per file."
        )}

        <div className="text-center">
          <button
            type="submit"
            className="bg-custom-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
            style={{ backgroundColor: "#a53864" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFormPage3;