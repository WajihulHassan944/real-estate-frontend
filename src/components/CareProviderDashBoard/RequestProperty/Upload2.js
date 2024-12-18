
import React, { useState } from "react";

const PropertyFormPage2 = ({ onSubmit }) => {
  const [propertyDetails, setPropertyDetails] = useState({
    fireDoor: "",
    fireAlarm: "",
    bathrooms: { upstairs: "", downstairs: "" },
    toilets: { upstairs: "", downstairs: "" },
    doubleGlazing: "",
    centralHeating: "",
    furnished: "",
    partlyFurnished: "",
    unfurnished: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   onSubmit();
  };


  const handleBathroomChange = (location, value) => {
    setPropertyDetails((prev) => ({
      ...prev,
      bathrooms: { ...prev.bathrooms, [location]: value },
    }));
  };

  const handleToiletChange = (location, value) => {
    setPropertyDetails((prev) => ({
      ...prev,
      toilets: { ...prev.toilets, [location]: value },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUnfurnishedChange = (e) => {
    const { value } = e.target;
    setPropertyDetails((prev) => ({ ...prev, unfurnished: value }));
  };

  return (
    <div className="w-11/12 mx-auto my-10 font-sans">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* Fire Door */}
        <div>
          <label className="block text-sm font-medium mb-2">Fire Door</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="fireDoor"
                value="Yes"
                checked={propertyDetails.fireDoor === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="fireDoor"
                value="No"
                checked={propertyDetails.fireDoor === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Fire Alarm */}
        <div>
          <label className="block text-sm font-medium mb-2">Fire Alarm</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="fireAlarm"
                value="Yes"
                checked={propertyDetails.fireAlarm === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="fireAlarm"
                value="No"
                checked={propertyDetails.fireAlarm === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Bathrooms (Upstairs and Downstairs with numbers) */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-2">Bathrooms</label>
          <div className="flex gap-8">
            {/* Upstairs */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-2">Upstairs</label>
              <select
                className="w-full border rounded-lg p-2"
                value={propertyDetails.bathrooms.upstairs}
                onChange={(e) => handleBathroomChange("upstairs", e.target.value)}
              >
                <option value="">Choose a number</option>
                {[...Array(5).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Downstairs */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-2">Downstairs</label>
              <select
                className="w-full border rounded-lg p-2"
                value={propertyDetails.bathrooms.downstairs}
                onChange={(e) => handleBathroomChange("downstairs", e.target.value)}
              >
                <option value="">Choose a number</option>
                {[...Array(5).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Separate Toilets (Upstairs and Downstairs with numbers) */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-2">Separate Toilets</label>
          <div className="flex gap-8">
            {/* Upstairs */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-2">Upstairs</label>
              <select
                className="w-full border rounded-lg p-2"
                value={propertyDetails.toilets.upstairs}
                onChange={(e) => handleToiletChange("upstairs", e.target.value)}
              >
                <option value="">Choose a number</option>
                {[...Array(5).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Downstairs */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-2">Downstairs</label>
              <select
                className="w-full border rounded-lg p-2"
                value={propertyDetails.toilets.downstairs}
                onChange={(e) => handleToiletChange("downstairs", e.target.value)}
              >
                <option value="">Choose a number</option>
                {[...Array(5).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Double Glazing */}
        <div>
          <label className="block text-sm font-medium mb-2">Double Glazing</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="doubleGlazing"
                value="Yes"
                checked={propertyDetails.doubleGlazing === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="doubleGlazing"
                value="No"
                checked={propertyDetails.doubleGlazing === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Central Heating */}
        <div>
          <label className="block text-sm font-medium mb-2">Central Heating</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="centralHeating"
                value="Yes"
                checked={propertyDetails.centralHeating === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="centralHeating"
                value="No"
                checked={propertyDetails.centralHeating === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Furnishing Options */}
        <div>
          <label className="block text-sm font-medium mb-2">Furnished</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="furnished"
                value="Yes"
                checked={propertyDetails.furnished === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="furnished"
                value="No"
                checked={propertyDetails.furnished === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Partly Furnished</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="partlyFurnished"
                value="Yes"
                checked={propertyDetails.partlyFurnished === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="partlyFurnished"
                value="No"
                checked={propertyDetails.partlyFurnished === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
          </div>
          <div>
          <label className="block text-sm font-medium mb-2">Unfurnished</label>
          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="unfurnished"
                value="Yes"
                checked={propertyDetails.unfurnished === "Yes"}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="unfurnished"
                value="No"
                checked={propertyDetails.unfurnished === "No"}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
          </div>
    

        {/* Submit Button */}
        <div className="col-span-full text-center mt-6">
          <button
            type="submit"
            className="bg-custom-blue text-white rounded-lg px-6 py-2 font-bold hover:bg-blue-700"
            style={{ backgroundColor: '#a53864' }} >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFormPage2;