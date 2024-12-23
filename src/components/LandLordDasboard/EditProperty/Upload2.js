import React from "react";

const PropertyFormPage2 = ({ propertyDetails, setPropertyDetails, onNext }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(propertyDetails);
    onNext();
  };
  const handleBathroomChange = (location, value) => {
    setPropertyDetails((prev) => {
      const updatedDetails = { ...prev };
  
      if (location === "upstairs") {
        updatedDetails.numBathrooms = value; // Set total bathrooms upstairs
        updatedDetails.bathroomLocation = "Upstairs"; // Set toilet location
        updatedDetails.bathroomLocationType = "Upstairs"; // Set toilet location type
      } else if (location === "downstairs") {
        updatedDetails.numBathroomsInLocation = value; // Set bathrooms downstairs
        updatedDetails.bathroomLocation = "Downstairs"; // Set toilet location
        updatedDetails.bathroomLocationType = "Downstairs"; // Set toilet location type
      }
  
      return updatedDetails;
    });
  };
  const handleToiletChange = (location, value) => {
    setPropertyDetails((prev) => {
      const updatedDetails = { ...prev };
  
      if (location === "upstairs") {
        updatedDetails.numToilets = value; // Set total toilets upstairs
        updatedDetails.separateToiletLocation = "Upstairs"; // Set toilet location
        updatedDetails.separateToiletLocationType = "Upstairs"; // Set toilet location type
      } else if (location === "downstairs") {
        updatedDetails.numToiletsInLocation = value; // Set toilets downstairs
        updatedDetails.separateToiletLocation = "Downstairs"; // Set toilet location
        updatedDetails.separateToiletLocationType = "Downstairs"; // Set toilet location type
      }
  
      return updatedDetails;
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: ["fireDoor", "fireAlarm"].includes(name) ? value === "Yes" : value, // Convert "Yes"/"No" to true/false for booleans
    }));
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
                checked={propertyDetails.fireDoor == true}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="fireDoor"
                value="No"
                checked={propertyDetails.fireDoor == false}
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
                checked={propertyDetails.fireAlarm === true}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2 ml-4">
              <input
                type="radio"
                name="fireAlarm"
                value="No"
                checked={propertyDetails.fireAlarm === false}
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
        value={propertyDetails.numBathrooms || ""}
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
        value={propertyDetails.numBathroomsInLocation || ""}
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
        value={propertyDetails.numToilets || ""}
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
        value={propertyDetails.numToiletsInLocation || ""}
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
        value={true}
        checked={propertyDetails.doubleGlazing === true}
        onChange={(e) =>
          setPropertyDetails((prev) => ({
            ...prev,
            doubleGlazing: e.target.value === "true"
          }))
        }
      />
      <span>Yes</span>
    </label>
    <label className="inline-flex items-center space-x-2 ml-4">
      <input
        type="radio"
        name="doubleGlazing"
        value={false}
        checked={propertyDetails.doubleGlazing === false}
        onChange={(e) =>
          setPropertyDetails((prev) => ({
            ...prev,
            doubleGlazing: e.target.value === "true"
          }))
        }
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
        value={true}
        checked={propertyDetails.centralHeating === true}
        onChange={(e) =>
          setPropertyDetails((prev) => ({
            ...prev,
            centralHeating: e.target.value === "true"
          }))
        }
      />
      <span>Yes</span>
    </label>
    <label className="inline-flex items-center space-x-2 ml-4">
      <input
        type="radio"
        name="centralHeating"
        value={false}
        checked={propertyDetails.centralHeating === false}
        onChange={(e) =>
          setPropertyDetails((prev) => ({
            ...prev,
            centralHeating: e.target.value === "true"
          }))
        }
      />
      <span>No</span>
    </label>
  </div>
</div>
{/* Furnished Status */}
<div>
  <label className="block text-sm font-medium mb-2">Furnished Status</label>
  <div>
    {/* Furnished */}
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name="furnished"
        value="Furnished"
        checked={propertyDetails.furnished === "Furnished"}
        onChange={handleInputChange}
      />
      <span>Furnished</span>
    </label>
    {/* Partly Furnished */}
    <label className="inline-flex items-center space-x-2 ml-4">
      <input
        type="radio"
        name="furnished"
        value="Partly Furnished"
        checked={propertyDetails.furnished === "Partly Furnished"}
        onChange={handleInputChange}
      />
      <span>Partly Furnished</span>
    </label>
    {/* Unfurnished */}
    <label className="inline-flex items-center space-x-2 ml-4">
      <input
        type="radio"
        name="furnished"
        value="Unfurnished"
        checked={propertyDetails.furnished === "Unfurnished"}
        onChange={handleInputChange}
      />
      <span>Unfurnished</span>
    </label>
  </div>
</div>


<div className="col-span-full text-center mt-4">
          <button
            type="submit"
            className="bg-custom-blue text-white rounded-lg px-6 py-2 font-bold hover:bg-blue-700"
            style={{ backgroundColor: '#a53864' }}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFormPage2;
