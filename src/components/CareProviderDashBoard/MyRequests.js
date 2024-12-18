import React, { useState } from "react";

const MyRequests = () => {
  // Dummy listings data
  const [listings, setListings] = useState([
    {
      location: "123 Main St, Springfield",
      propertyType: "Apartment",
      budget: "$1,500/month",
      leaseTerm: "12 months",
    },
    {
      location: "456 Elm St, Shelbyville",
      propertyType: "Office Space",
      budget: "$2,000/month",
      leaseTerm: "24 months",
    },
    {
      location: "789 Oak St, Ogdenville",
      propertyType: "Single Family Home",
      budget: "$3,200/month",
      leaseTerm: "6 months",
    },
    {
      location: "101 Maple Ave, Capital City",
      propertyType: "Retail Space",
      budget: "$4,500/month",
      leaseTerm: "36 months",
    },
    {
      location: "202 Birch Rd, North Haverbrook",
      propertyType: "Warehouse",
      budget: "$5,000/month",
      leaseTerm: "18 months",
    },
  ]);

  const [visibleListings, setVisibleListings] = useState(5);

  return (
    <div className="flex pt-8">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold pb-8 text-center font-raleway text-[#154D7C] mb-6">
            My Requests
          </h1>

          {/* Table for larger screens */}
          <div className="hidden sm:block overflow-x-auto pb-24">
            <table className="w-full border-collapse border border-[#154D7C] min-w-[350px]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-md font-raleway font-bold text-[#000000] border border-[#154D7C]">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-md font-raleway font-bold text-[#000000] border border-[#154D7C]">
                    Property Type
                  </th>
                  <th className="px-6 py-3 text-left text-md font-raleway font-bold text-[#000000] border border-[#154D7C]">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-md font-raleway font-bold text-[#000000] border border-[#154D7C]">
                    Lease Term
                  </th>
                  <th className="px-6 py-3 text-left text-md font-raleway font-bold text-[#000000] border border-[#154D7C]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {listings.slice(0, visibleListings).map((listing, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.location}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.propertyType}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.budget}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.leaseTerm}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-[#154D7C]">
                      <div className="flex space-x-2">
                        <button
                          className="bg-[#154D7C] text-white px-4 py-1 rounded-full text-sm"
                        >
                          View Details
                        </button>
                        <button
                          className="bg-[#C64C7B] text-white px-4 py-1 rounded-full text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card view for smaller screens */}
          <div className="sm:hidden">
            {listings.slice(0, visibleListings).map((listing, index) => (
              <div
                key={index}
                className="border border-[#154D7C] rounded-xl mb-2 bg-white shadow-sm p-4"
              >
                <div className="text-sm font-bold text-[#000000]">Location:</div>
                <div className="text-sm text-black">{listing.location}</div>

                <div className="text-sm font-bold text-[#000000] mt-2">
                  Property Type:
                </div>
                <div className="text-sm text-black">{listing.propertyType}</div>

                <div className="text-sm font-bold text-[#000000] mt-2">Budget:</div>
                <div className="text-sm text-black">{listing.budget}</div>

                <div className="text-sm font-bold text-[#000000] mt-2">
                  Lease Term:
                </div>
                <div className="text-sm text-black">{listing.leaseTerm}</div>

                <div className="mt-4 flex space-x-2">
                  <button className="bg-[#154D7C] text-white px-4 py-1 rounded-full text-sm">
                    View Details
                  </button>
                  <button className="bg-[#C64C7B] text-white px-4 py-1 rounded-full text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
