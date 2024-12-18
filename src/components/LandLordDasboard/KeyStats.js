import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../const/url.const';

function KeyStats({ onUploadClick, onCurrentPropertiesClick }) {
  const landlord = useSelector((state) => state.landlord); // Access landlord details from Redux store
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${baseUrl}/properties`);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data.properties);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter properties based on landlord ID
  const landlordProperties = properties.filter(
    (property) => property.userId === landlord.id
  );

  // Count active properties
  const activePropertiesCount = landlordProperties.filter(
    (property) => property.status === 'Active' || property.status === 'Let' || property.status === 'To Let'
  ).length;
  
  // Count leased properties
  const leasedPropertiesCount = landlordProperties.filter(
    (property) => property.status === 'Leased'
  ).length;

  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 p-4"
      style={{ width: '100%', maxWidth: '1200px' }}
    >
      {loading ? (
        <p>Loading properties...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-full pt-8 justify-center">
            {/* Active Listings Card */}
            <div className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.05)] rounded-2xl p-6 text-center flex flex-col items-center transition transform hover:scale-103 hover:shadow-2xl">
              <h2 className="text-md font-bold font-montserrat text-[#000000]">
                Active Listings
              </h2>
              <p className="text-5xl font-inria font-light text-[#000000] my-4">
                {activePropertiesCount}
              </p>
              <button className="bg-[#C64C7B] text-white px-6 text-sm py-2 rounded-full hover:bg-[#9e3f60] transition duration-300" onClick={onCurrentPropertiesClick}>
                View All
              </button>
            </div>
  
            {/* Leased Properties Card */}
            <div className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.05)] rounded-2xl p-6 text-center flex flex-col items-center transition transform hover:scale-103 hover:shadow-2xl">
              <h2 className="text-md font-bold font-montserrat text-[#000000]">
                Leased Properties
              </h2>
              <p className="text-5xl font-inria font-light text-[#000000] my-4">
                {leasedPropertiesCount}
              </p>
              <button className="bg-[#C64C7B] text-white px-6 text-sm py-2 rounded-full hover:bg-[#9e3f60] transition duration-300">
                View All
              </button>
            </div>
  
            {/* Interested in Selling Card */}
            <div className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.05)] rounded-2xl p-6 text-center flex flex-col items-center transition transform hover:scale-103 hover:shadow-2xl">
              <h2 className="text-md font-bold font-montserrat text-[#000000]">
                Requests Received
              </h2>
              <p className="text-5xl font-inria font-light text-[#000000] my-4">
                0
              </p>
              <button className="bg-[#C64C7B] text-white px-6 text-sm py-2 rounded-full hover:bg-[#9e3f60] transition duration-300">
                Update
              </button>
            </div>
          </div>
  
          {/* Upload Button */}
          <div className="pt-8 pb-20">
            <button
              className="bg-[#C64C7B] text-white px-6 py-3 rounded-full text-sm hover:bg-[#9e3f60] transition duration-300"
              onClick={onUploadClick}
            >
              Upload Property
            </button>
          </div>
        </>
      )}
    </div>
  );
}  
export default KeyStats;
