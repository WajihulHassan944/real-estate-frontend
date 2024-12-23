import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { baseUrl } from "../../const/url.const";

const MyRequests = ({onViewDetailsRequest}) => {
  const careProvider = useSelector((state) => state.careProvider); // Ensure correct state mapping
  const [listings, setListings] = useState([]);
  const [visibleListings, setVisibleListings] = useState(5);

  // Fetch data from the API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`${baseUrl}/properties/requests`);
        if (!response.ok) {
          throw new Error("Failed to fetch property requests.");
        }
        const data = await response.json(); 
        // Filter listings by careProvider ID
        const filteredListings = data.filter((item) => item.userId === careProvider.id);
        setListings(filteredListings);
      } catch (error) {
        console.error("Error fetching requests:", error);
        toast.error("Unable to fetch property requests.");
      }
    };

    fetchRequests();
  }, [careProvider.id]);

  // Delete request
const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("authTokenCareProvider"); // Retrieve the token from localStorage

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${baseUrl}/properties/request/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`, // Add the token to the Authorization header
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete the property request.");
    }

    // Update the listings by removing the deleted item
    setListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
    toast.success("Request deleted successfully!");
  } catch (error) {
    console.error("Error deleting request:", error);
    toast.error("Failed to delete the request. Please try again.");
  }
};


const handleViewDetails = (id) => {
  onViewDetailsRequest(id);
};

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
                {listings.slice(0, visibleListings).map((listing) => (
                  <tr key={listing.id} className="bg-white">
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.address}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.propertyType}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      ${parseFloat(listing.rentAmount).toFixed(2)}/month
                    </td>
                    <td className="px-6 py-3 text-sm text-[#000000] border border-[#154D7C]">
                      {listing.leaseTerms.join(", ")}
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
                          onClick={() => handleDelete(listing.id)}
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
            {listings.slice(0, visibleListings).map((listing) => (
              <div
                key={listing.id}
                className="border border-[#154D7C] rounded-xl mb-2 bg-white shadow-sm p-4"
              >
                <div className="text-sm font-bold text-[#000000]">Location:</div>
                <div className="text-sm text-black">{listing.address}</div>

                <div className="text-sm font-bold text-[#000000] mt-2">
                  Property Type:
                </div>
                <div className="text-sm text-black">{listing.propertyType}</div>

                <div className="text-sm font-bold text-[#000000] mt-2">Budget:</div>
                <div className="text-sm text-black">
                  ${parseFloat(listing.rentAmount).toFixed(2)}/month
                </div>

                <div className="text-sm font-bold text-[#000000] mt-2">
                  Lease Term:
                </div>
                <div className="text-sm text-black">{listing.leaseTerms.join(", ")}</div>

                <div className="mt-4 flex space-x-2">
                  <button className="bg-[#154D7C] text-white px-4 py-1 rounded-full text-sm"  
                  onClick={() => alert(listing.id)}>
                    View Detailsss
                  </button>
                  <button
                    className="bg-[#C64C7B] text-white px-4 py-1 rounded-full text-sm"
                    onClick={() => handleDelete(listing.id)}
                  >
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
