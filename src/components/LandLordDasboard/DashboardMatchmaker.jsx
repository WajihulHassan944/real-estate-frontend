import React, { useState } from 'react';
import "../../assets/css/dashboardMatchmaker/dashboardMatchmaker.css";
import { FiSearch } from 'react-icons/fi';

const DashboardMatchmaker = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options for each dropdown

  const handleDropdownToggle = (buttonKey) => {
    setActiveDropdown(activeDropdown === buttonKey ? null : buttonKey);
  };

  const handleOptionSelect = (buttonKey, option) => {
    setSelectedOptions((prev) => {
      const currentSelection = prev[buttonKey] || [];
      if (currentSelection.includes(option)) {
        return { ...prev, [buttonKey]: currentSelection.filter((opt) => opt !== option) };
      }
      return { ...prev, [buttonKey]: [...currentSelection, option] };
    });
  };

  const options = {
    location: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    propertyType: ['Apartment', 'House', 'Condo'],
    bedrooms: ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms'],
    rent: ['$500-$1000', '$1000-$1500', '$1500+'],
    leaseTerms: ['Short-term', 'Long-term', 'Month-to-month'],
    accessibility: ['Wheelchair Access', 'Elevator', 'Ground Floor'],
    parking: ['Garage', 'Street Parking', 'None'],
    receptionRooms: ['1 Room', '2 Rooms', '3+ Rooms'],
  };

  return (
    <div className='matchMakerWrapper'>
      <h1>Search For Care Providers</h1>

      <div className='matchMakerMain'>
        <div className='matchMakerInput'>
          <input type="text" placeholder='Search For Care Providers' />
          <FiSearch className='searchIcon' />
        </div>

        <p>Use the filters to customize your search and find caregivers that match your specific criteria.</p>

        <div className='matchMakerButtonsWrapper'>
          {Object.keys(options).map((key) => (
            <div key={key} className='dropdownWrapper'>
              <button onClick={() => handleDropdownToggle(key)} className={activeDropdown === key ? 'activeBtn' : ''}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </button>
              {activeDropdown === key && (
                <div className='dropdown'>
                  {options[key].map((option) => (
                    <div
                      key={option}
                      className={`dropdownOption ${selectedOptions[key]?.includes(option) ? 'selected' : ''}`}
                      onClick={() => handleOptionSelect(key, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className='matchMakerSubmitBtn'>Submit</button>
      </div>
    </div>
  );
};

export default DashboardMatchmaker;
