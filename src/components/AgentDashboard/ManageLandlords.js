import React from "react";
import { FiSearch } from "react-icons/fi";

function ManageLandlords() {
  const handleSearchClick = () => {
    console.log("Search icon clicked");
  };

  const landlordNames = ["John Smith", "Emily Johnson", "Michael Brown", "Sarah Williams", "David Jones"];
  const landlordEmails = ["@email.com", "@email.com", "@email.com", "@email.com", "@email.com"];
  const activeListings = ["1", "2", "3", "4", "5"];

  return (
    <div>
      <h2 className="text-2xl font-bold font-montserrat text-center text-[#154D7C] pb-6 mb-8">Manage Landlords</h2>

      {/* Search Section */}
      <div className="flex flex-col items-center space-y-6 mb-8 px-4">
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <input
            placeholder="Search for Landlords"
            type="search"
            className="border border-[#C64C7B] rounded-full px-4 py-2 w-full focus:outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="absolute inset-y-0 right-4 flex items-center justify-center text-[#C64C7B] hover:text-pink-500"
            style={{ top: '50%', right: '16px', transform: 'translateY(-70%)' }}
          >
            <FiSearch size={24} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center font-montserrat space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 py-8">
  <div className="relative inline-block">
    <button className="bg-[#9FC8DA] text-white font-bold px-6 py-2 rounded-lg shadow-md relative hover:bg-[#7BAAC8] transition">
      Contact Info
      <span className="absolute top-0 right-0 w-5 h-5 bg-white -translate-y-[55%] translate-x-[5%] rotate-45"></span>
    </button>
  </div>
  <div className="relative inline-block">
    <button className="bg-[#9FC8DA] text-white font-bold px-6 py-2 rounded-lg shadow-md relative hover:bg-[#7BAAC8] transition">
      Landlord Name
      <span className="absolute top-0 right-0 w-5 h-5 bg-white -translate-y-[55%] translate-x-[5%] rotate-45"></span>
    </button>
  </div>
</div>
      </div>

      {/* Cards View for Mobile and Medium Screens */}
      <div className="block lg:hidden overflow-x-auto px-4 pb-24">
        {landlordNames.map((name, index) => (
          <div key={index} className="border border-[#154D7C] rounded-xl mb-4 bg-white shadow-sm p-4">
            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000]">Landlord Name:</div>
            <div className="text-sm md:text-lg text-black">{name}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Contact Info:</div>
            <div className="text-sm md:text-lg text-black">{landlordEmails[index]}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Number of Active Listings:</div>
            <div className="text-sm md:text-lg text-black">{activeListings[index]}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Number of Inactive Listings:</div>
            <div className="text-sm md:text-lg text-black">{activeListings[index]}</div>

            <div className="mt-4 md:pt-4  md:space-x-6 flex  justify-center space-x-2">
              <button className="bg-[#C64C7B] text-white px-4 py-1 md:px-8 md:py-2  rounded-full text-sm md:text-xl">
                View Details
              </button>
              <button className="bg-[#154D7C] text-white px-4 py-1 md:px-8 md:py-2   rounded-full text-sm md:text-xl">
                Contact Landlord
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Table View for Larger Screens */}
      <div className="hidden lg:block justify-center overflow-x-auto pb-24">
        <div className="w-full max-w-5xl">
        <table className="w-full border-collapse border border-[#154D7C] mx-auto">
          <thead>
            <tr className="bg-[#F0F4F8] font-montserrat">
              <th className="px-4 py-2 text-left font-bold text-[#000000] border border-[#154D7C]">Landlord Name</th>
              <th className="px-4 py-2 text-left font-bold text-[#000000] border border-[#154D7C]">Contact Info</th>
              <th className="px-4 py-2 text-left font-bold text-[#000000] border border-[#154D7C]">Active Listings</th>
              <th className="px-4 py-2 text-left font-bold text-[#000000] border border-[#154D7C]">Inactive Listings</th>
              <th className="px-4 py-2 text-left font-bold text-[#000000] border border-[#154D7C]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {landlordNames.map((name, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 transition">
                <td className="px-4 py-2 text-[#000] border border-[#154D7C]">{name}</td>
                <td className="px-4 py-2 text-[#000] border border-[#154D7C]">{landlordEmails[index]}</td>
                <td className="px-4 py-2 text-[#000] border border-[#154D7C]">{activeListings[index]}</td>
                <td className="px-4 py-2 text-[#000] border border-[#154D7C]">{activeListings[index]}</td>
                <td className="px-4 py-2 border border-[#154D7C]">
                  <div className="flex gap-2">
                    <button className="bg-[#154D7C] text-white px-4 py-1 rounded-full text-sm">
                      View Details
                    </button>
                    <button className="bg-[#C64C7B] text-white px-4 py-1 rounded-full text-sm">
                      Contact Landlord
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    
  );
}

export default ManageLandlords;
