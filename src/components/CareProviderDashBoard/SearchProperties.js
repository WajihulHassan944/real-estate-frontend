import React, { useState } from 'react';
import "../../assets/css/dashboardMatchmaker/dashboardMatchmaker.css";
import { FiSearch } from 'react-icons/fi';
import Image from "../../assets/images/image5.png";

const SearchProperties = () => {
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
       <h1>Search For Property</h1>
 
       <div className='matchMakerMain'>
         <div className='matchMakerInput'>
           <input type="text" placeholder='Search For Property' />
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





       <div className=" p-8 pb-14" style={{ width:'100%'}}>
      <h2 className="text-2xl font-extrabold font-montserrat py-4 px-8 text-[#2E86AB] mb-6">Search Results</h2>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
       
            <div  className="bg-white rounded-3xl shadow-lg p-4 flex flex-col">
              <img src={Image} alt="Property" className="w-full object-cover rounded-3xl mb-4" />
              <h3 className="text-md font-medium">propertyDescription</h3>
              <p className="text-sm">rentAmount USD</p>
              <p className="text-sm mb-4">propertyType</p>
              <div className="flex justify-between relative">
            <button className="bg-[#a53864] text-white text-[14px] px-3 py-1 rounded-full hover:bg-[#1E5D7B]">View Details</button>
            </div>
            </div>

            <div  className="bg-white rounded-3xl shadow-lg p-4 flex flex-col">
              <img src={Image} alt="Property" className="w-full object-cover rounded-3xl mb-4" />
              <h3 className="text-md font-medium">propertyDescription</h3>
              <p className="text-sm">rentAmount USD</p>
              <p className="text-sm mb-4">propertyType</p>
              <div className="flex justify-between relative">
            <button className="bg-[#a53864] text-white text-[14px] px-3 py-1 rounded-full hover:bg-[#1E5D7B]">View Details</button>
            </div>
            </div>
      
        </div>
   {/*  
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src={require("../../assets/images/image6.png")} // Placeholder for no requests
              alt="No Request"
              className="w-60 h-50"
            />
          </div>
          <p className="text-[#000000] font-raleway font-semibold text-sxl mb-5">No Current Request</p>
        </div>
     */}
    </div>









    
     </div>
   );
 };
export default SearchProperties