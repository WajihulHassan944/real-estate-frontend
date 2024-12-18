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

  const handleDeleteFile = (fileCategory, fileIndex) => {
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [fileCategory]: prevDetails[fileCategory].filter((_, index) => index !== fileIndex),
    }));
  };

  const renderUploadedFiles = (fileCategory) => {
    const files = propertyDetails[fileCategory] || [];
    return (
      <ul className="mt-2 text-sm text-gray-600">
        {files.map((file, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="truncate">{file.name || file}</span>
            <button
              type="button"
              className="ml-2 text-red-500 hover:underline"
              onClick={() => handleDeleteFile(fileCategory, index)}
            >
              Delete
            </button>
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
      {renderUploadedFiles(fileCategory)}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(propertyDetails);
  };

  return (
    <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        {renderFileInput(
          "Upload Property Images",
          "photos",
          10,
          10 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: JPEG, PNG. Max file size: 10MB per file. Max uploads: 10 photos."
        )}

        {renderFileInput(
          "Upload Floor Plan Images",
          "floorPlans",
          10,
          10 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: JPEG, PNG. Max file size: 10MB per file."
        )}

        {renderFileInput(
          "Upload Inventory",
          "inventory",
          10,
          10 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: JPEG, PNG. Max file size: 10MB per file."
        )}

        {renderFileInput(
          "Upload EPC",
          "epc",
          5,
          5 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, DOC, DOCX, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload Gas Certificate",
          "gasCertificate",
          5,
          5 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, DOC, DOCX, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload EICR",
          "eicr",
          5,
          5 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, DOC, DOCX, JPEG, PNG. Max file size: 5MB per file."
        )}

        {renderFileInput(
          "Upload Insurance",
          "insurance",
          5,
          5 * 1024 * 1024,
          ".pdf,.jpeg,.jpg,.png",
          "Accepted file types: PDF, DOC, DOCX, JPEG, PNG. Max file size: 5MB per file."
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
