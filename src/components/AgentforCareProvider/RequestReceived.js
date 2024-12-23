import React from 'react';
import { FiSearch } from "react-icons/fi";

function RequestReceived() {
  const handleSearchClick = () => {
    console.log("Search icon clicked");
  };

  const RequestId = ["John Smith", "Emily Johnson", "Michael Brown", "Sarah Williams", "David Jones"];
  const RequestDate = ["11-8-24", "12-8-24", "13-8-24", "14-8-24", "15-8-24"];
  const propertyReference = ["10001", "10050", "10040", "90000", "10005"];
  const Status = ["pending", "resolved", "open", "pending", "open"];

  return (
    <div>
      <h2 className="text-2xl font-extrabold font-montserrat text-center pb-4 px-8 text-[#154D7C] mb-6">
        Requests Received
      </h2>
      <div className="flex flex-col items-center space-y-6 mb-8">
        {/* Search Section */}
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg pb-4">
          <input
            placeholder="Search for Requests"
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
        <p className="text-center px-4 sm:text-base font-montserrat">Use the filters to customize your search and find caregivers that match your specific criteria.</p>
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center font-montserrat space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-0 lg:space-x-4 py-6">
          <div className="relative inline-block">
            <button className="bg-[#9FC8DA] text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-[#7BAAC8] transition">
              Request Status
              <span className="absolute top-0 right-0 w-5 h-5 bg-white -translate-y-[55%] translate-x-[5%] rotate-45"></span>
            </button>
          </div>

          <div className="relative inline-block">
            <button className="bg-[#9FC8DA] text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-[#7BAAC8] transition">
              Landlord Name 
              <span className="absolute top-0 right-0 w-5 h-5 bg-white -translate-y-[55%] translate-x-[5%] rotate-45"></span>
            </button>
          </div>

          <div className="relative inline-block">
            <button className="bg-[#9FC8DA] text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-[#7BAAC8] transition">
              Property Reference
              <span className="absolute top-0 right-0 w-5 h-5 bg-white -translate-y-[55%] translate-x-[5%] rotate-45"></span>
            </button>
          </div>
        </div>

      </div>
      {/* Cards View for Small and Medium Screens */}
      <div className="block lg:hidden overflow-x-auto px-4 pb-24">
        {RequestId.map((name, index) => (
          <div key={index} className="border border-[#154D7C] rounded-xl mb-4 bg-white shadow-sm p-4">
            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000]">Landlord Name:</div>
            <div className="text-sm md:text-lg text-black">{name}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Request Date:</div>
            <div className="text-sm md:text-lg text-black">{RequestDate[index]}</div>

            <div className="text-sm md:text-xl font-bold font-montserrat text-[#000000] mt-2">Property Reference:</div>
            <div className="text-sm md:text-lg text-black">{propertyReference[index]}</div>

            <div className="text-sm md:md:text-xl font-bold font-montserrat text-[#000000] mt-2">Status:</div>
            <div className="text-sm md:text-lg text-black">{Status[index]}</div>

            <div className="mt-4 md:pt-4  md:space-x-6 flex  justify-center space-x-2">
              <button className="bg-[#C64C7B] text-white px-4 py-1 md:px-8 md:py-2  rounded-full text-sm md:text-xl">
                View Request
              </button>
              <button className="bg-[#154D7C] text-white px-4 py-1 md:px-8 md:py-2   rounded-full text-sm md:text-xl">
                Respond
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Table View for Large Screens */}
      <div className="hidden lg:block justify-center overflow-x-auto pb-24">
    <div className="w-full max-w-5xl">
        <table className="w-full border-collapse border border-[#154D7C] mx-auto">
            <thead>
                <tr className='bg-[#F0F4F8] font-montserrat'>
                    <th className="px-6 py-3 text-left text-md  font-bold text-[#000000] border border-[#154D7C]">
                        Request ID
                    </th>
                    <th className="px-6 py-3 text-left text-md  font-bold text-[#000000] border border-[#154D7C]">
                        Property Reference
                    </th>
                    <th className="px-6 py-3 text-left text-md  font-bold text-[#000000] border border-[#154D7C]">
                        Request Date
                    </th>
                    <th className="px-6 py-3 text-left text-md  font-bold text-[#000000] border border-[#154D7C]">
                        Status
                    </th>
                    <th className="px-6 py-3 text-left text-md  font-bold text-[#000000] border border-[#154D7C]">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {RequestId.map((name, index) => (
                    <tr key={index} className="bg-white">
                        <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                            {name}
                        </td>
                        <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                            {propertyReference[index]}
                        </td>
                        <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                            {RequestDate[index]}
                        </td>
                        <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                            {Status[index]}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-700 border border-[#2E86AB]">
                            <div className="flex flex-col space-y-2 lg:flex-col">
                                <button className="bg-[#154D7C] text-white px-4 py-1 rounded-full text-xs">
                                    View Request
                                </button>
                                <button className="bg-[#C64C7B] text-white px-4 py-1 whitespace-nowrap rounded-full text-xs mt-2">
                                    Respond
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

export default RequestReceived;
