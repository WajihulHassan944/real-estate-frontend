import React, { useState } from "react";

const PropertyFormPage1 = ({ propertyDetails, setPropertyDetails, onNext }) => {
  const accessibilityOptions = [
    "Step-Free Access",
    "Wheelchair-Friendly",
    "Lift Access",
    "Wider Doorways",
    "Other",
  ];

  const handleAccessibilityChange = (feature) => {
    setPropertyDetails((prev) => ({
      ...prev,
      accessibilityFeatures: prev.accessibilityFeatures.includes(feature)
        ? prev.accessibilityFeatures.filter((f) => f !== feature)
        : [...prev.accessibilityFeatures, feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(propertyDetails);
    onNext(); // Parent will handle the propertyDetails
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update propertyDetails for specific fields
    if (name === "parking") {
      setPropertyDetails((prev) => ({
        ...prev,
        [name]: value,
        parkingAvailability: value === "No Parking" ? "No Parking" : "Available", // Set parkingAvailability
      }));
    } else if (name === "postalCode") {
      // Ensure postalCode is stored as an integer or null
      setPropertyDetails((prev) => ({
        ...prev,
        [name]: value ? parseInt(value) : null,
      }));
    } else {
      setPropertyDetails((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  
// Handler for lease terms change
const handleLeaseTermChange = (event) => {
  const { value } = event.target;
  setPropertyDetails((prevDetails) => {
    const currentTerms = prevDetails.leaseTerms;
    if (currentTerms.includes(value)) {
      // Remove the term if it already exists (deselected)
      return {
        ...prevDetails,
        leaseTerms: currentTerms.filter((term) => term !== value),
      };
    } else {
      // Add the new term
      return {
        ...prevDetails,
        leaseTerms: [...currentTerms, value],
      };
    }
  });
};

  return (
    <div className="w-11/12 mx-auto my-10 font-sans">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Property Type</label>
          <select
            className="w-full border rounded-lg p-2"
            name="propertyType"
            value={propertyDetails.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Choose a Property type</option>
            <option value="Detached House">Detached House</option>
            <option value="Semi-Detached House">Semi-Detached House</option>
            <option value="Terraced House">Terraced House</option>
            <option value="End-of-Terrace House">End-of-Terrace House</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Apartment/Flat">Apartment/Flat</option>
            <option value="Studio">Studio</option>
            <option value="Maisonette">Maisonette</option>
            <option value="Room in a Shared House">Room in a Shared House</option>
            <option value="Commercial Property">Commercial Property</option>
            <option value="Other">Other</option>
          </select>
          {propertyDetails.propertyType === "Other" && (
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">Please specify</label>
              <input
                type="text"
                placeholder="Specify other property type"
                className="w-full border rounded-lg p-2"
                name="otherPropertyType"
                value={propertyDetails.otherPropertyType}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Number of Bedrooms</label>
          <select
            className="w-full border rounded-lg p-2"
            name="numOfBedrooms"
            value={propertyDetails.numOfBedrooms}
            onChange={handleChange}
            required
          >
            <option value="">Choose a Number</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Available Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Available Date</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            name="availableDate"
            value={propertyDetails.availableDate}
            onChange={handleChange}
            required
          />
        </div>

   


        {/* Rent */}
        <div>
          <label className="block text-sm font-medium mb-1">Rent Amount</label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="0"
              placeholder="Enter amount"
              className="border rounded-lg p-2 w-2/3"
              name="rentAmount"
              value={propertyDetails.rentAmount}
              onChange={handleChange}
              required
            />
            <select
              className="border rounded-lg p-2 w-1/3"
              name="rentType"
              value={propertyDetails.rentType}
              onChange={handleChange}
              
            >
              <option value="perMonth">Per Month</option>
              <option value="perWeek">Per Week</option>
            </select>
          </div>
        </div>

       {/* Lease Terms */}
<div>
  <label className="block text-sm font-medium mb-1">Lease Terms</label>
  <div className="border rounded-lg p-2">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="Short-Term Lease"
        checked={propertyDetails.leaseTerms.includes("Short-Term Lease")}
        onChange={handleLeaseTermChange}
        
      />
      Short-Term Lease
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="Long-Term Lease"
        checked={propertyDetails.leaseTerms.includes("Long-Term Lease")}
        onChange={handleLeaseTermChange}
      />
      Long-Term Lease
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="Flexible Lease"
        checked={propertyDetails.leaseTerms.includes("Flexible Lease")}
        onChange={handleLeaseTermChange}
      />
      Flexible Lease
    </label>
  </div>
</div>

        {/* Reception Rooms */}
        <div>
          <label className="block text-sm font-medium mb-1">Number of Reception Rooms</label>
          <select
            className="w-full border rounded-lg p-2"
            name="numOfReceptionRooms"
            value={propertyDetails.numOfReceptionRooms}
            onChange={handleChange}
            required
          >
            <option value="">Choose a Number</option>
            {[...Array(5).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        {/* HMO */}
        <div>
          <label className="block text-sm font-medium mb-1">HMO – (Y/N)</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2"
                value="Yes"
                checked={propertyDetails.isHMO === true}
                onChange={() =>
                  setPropertyDetails((prev) => ({ ...prev, isHMO: true }))
                }

              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-2"
                value="No"
                checked={propertyDetails.isHMO === false}
                onChange={() =>
                  setPropertyDetails((prev) => ({ ...prev, isHMO: false }))
                }
              />
              No
            </label>
          </div>

          {/* Conditionally Render Article 4 and HMO License */}
          {propertyDetails.isHMO === true && (
            <div className="mt-4 space-y-4">
              {/* Article 4 */}
              <div>
                <label className="block text-sm font-medium mb-1">Article 4 – (Y/N)</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value='Yes'
                      onChange={() =>
                        setPropertyDetails((prev) => ({ ...prev, isArticle4: true }))
                      }
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="No"
                      onChange={() =>
                        setPropertyDetails((prev) => ({ ...prev, isArticle4: false }))
                      }
                    />
                    No
                  </label>
                </div>
              </div>

              {/* HMO License */}
              <div>
                <label className="block text-sm font-medium mb-1">HMO License – (Y/N)</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="Yes"
                      onChange={() =>
                        setPropertyDetails((prev) => ({ ...prev, hmoLicense: true }))
                      }
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="No"
                      onChange={() =>
                        setPropertyDetails((prev) => ({ ...prev, hmoLicense: false }))
                      }
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Parking Availability */}
        <div>
          <label className="block text-sm font-medium mb-1">Parking Availability</label>
          <div className="space-y-2">
            {["No Parking", "Street Parking", "Driveway Parking", "Garage Parking"].map(
              (option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="parking"
                    value={option}
                    checked={propertyDetails.parking === option}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  {option}
                </label>
              )
            )}
          </div>
        </div>

        {/* Accessibility Features */}
        <div>
          <label className="block text-sm font-medium mb-1">Accessibility Features</label>
          <div className="space-y-2">
            {accessibilityOptions.map((feature) => (
              <div key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  value={feature}
                  checked={propertyDetails.accessibilityFeatures.includes(feature)}
                  onChange={() => handleAccessibilityChange(feature)}
                  className="mr-2"
                 
                />
                <span>{feature}</span>
              </div>
            ))}
            {propertyDetails.accessibilityFeatures.includes("Other") && (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Please specify"
                  className="ml-4 border rounded-lg p-1 w-full max-w-xs"
                  name="otherAccessibilityText"
                  value={propertyDetails.otherAccessibilityText}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>

        {/* Property Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Property Description</label>
          <textarea
            className="w-full border rounded-lg p-2"
            rows="4"
            placeholder="Enter description of the property"
            name="propertyDescription"
            value={propertyDetails.propertyDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
     {/* Address */}
     <div>
  <label className="block text-sm font-medium mb-1">Address</label>
  <input
    type="text"
    className="w-full border rounded-lg p-2"
    name="address"
    value={propertyDetails.address}
    onChange={handleChange}
    placeholder="Enter the property address"
    required
  />
</div>
{/* Postal Code */}
<div>
  <label className="block text-sm font-medium mb-1">Postal Code</label>
  <input
    type="number"
    className="w-full border rounded-lg p-2"
    placeholder="Enter postal code"
    name="postalCode"
    value={propertyDetails.postalCode || ""}
    onChange={handleChange}
    required
  />
</div>







{/* City */}
<div>
  <label className="block text-sm font-medium mb-1">City</label>
  <select
    className="w-full border rounded-lg p-2"
    name="city"
    value={propertyDetails.city}
    onChange={handleChange}
    required
  >
    <option value="">Select a city</option>
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





        {/* Save and Continue Button */}
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

export default PropertyFormPage1;
