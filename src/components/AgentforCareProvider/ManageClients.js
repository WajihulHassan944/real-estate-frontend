import React from "react";
import { FiSearch } from "react-icons/fi";

function ManageClients() {
  const handleSearchClick = () => {
    console.log("Search icon clicked");
  };

  const landlordNames = ["John Smith", "Emily Johnson", "Michael Brown", "Sarah Williams", "David Jones"];
  const landlordEmails = ["1", "1", "1", "1", "1"];
  const activeListings = ["1", "2", "3", "4", "5"];

  return (
    <div>
      <h2 className="text-2xl font-bold font-montserrat text-center text-[#154D7C] pb-6 mb-8">Manage Clients</h2>

      
      {/* Cards View for Mobile and Medium Screens */}
      <div className="block lg:hidden overflow-x-auto px-4 pb-24">
        {landlordNames.map((name, index) => (
          <div key={index} className="border border-[#154D7C] rounded-xl mb-4 bg-white shadow-sm p-4">
            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000]">Client Name:</div>
            <div className="text-sm md:text-lg text-black">{name}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Active Requests:</div>
            <div className="text-sm md:text-lg text-black">{landlordEmails[index]}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Matched Properties:</div>
            <div className="text-sm md:text-lg text-black">{activeListings[index]}</div>

           

            <div className="mt-4 md:pt-4  md:space-x-6 flex  justify-center space-x-2">
           
              <button className="bg-[#C64C7B] text-white px-4 py-1 md:px-8 md:py-2   rounded-full text-sm md:text-xl">
              View Details
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
          <th className="px-6 py-3 text-left font-bold text-[#000000] border border-[#154D7C]">Client Name</th>
          <th className="px-6 py-3 text-left font-bold text-[#000000] border border-[#154D7C]">Active Requests</th>
          <th className="px-6 py-3 text-left font-bold text-[#000000] border border-[#154D7C]">Matched Properties</th>
          <th className="px-6 py-3 text-left font-bold text-[#000000] border border-[#154D7C]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {landlordNames.map((name, index) => (
          <tr key={index} className="bg-white hover:bg-gray-100 transition">
            <td className="px-6 py-3 text-[#000] border border-[#154D7C]">{name}</td>
            <td className="px-6 py-3 text-[#000] border border-[#154D7C]">{landlordEmails[index]}</td>
            <td className="px-6 py-3 text-[#000] border border-[#154D7C]">{activeListings[index]}</td>
            <td className="px-6 py-3 border border-[#154D7C]">
              <div className="flex gap-2">
                <button className="bg-[#C64C7B] text-white px-4 py-1 rounded-full text-sm">
                  View Details
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

export default ManageClients;
