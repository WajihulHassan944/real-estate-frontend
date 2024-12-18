import React, { useState } from 'react';
import '../CareProviderDashBoard/style.css';
const CurrentRequests2 = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: require("../../assets/images/image2.png") , // Reference the imported images
      address: '652 Sardis Sta, Fort Worth, Texas',
      priceRange: '700$-1500$',
      type: 'Detached House',
    }, // Example path to your local image
    {
      id: 2,
      image: require("../../assets/images/image3.png") , // Reference the imported images
      address: '652 Sardis Sta, Fort Worth, Texas',
      priceRange: '700$-1500$',
      type: 'Detached House',
    }, 
    {
      id: 3,
      image: require("../../assets/images/image4.png") , // Reference the imported images
      address: '652 Sardis Sta, Fort Worth, Texas',
      priceRange: '700$-1500$',
      type: 'Detached House',
    }, 
    {
      id: 4,
      image: require("../../assets/images/image5.png") , // Reference the imported images
      address: '652 Sardis Sta, Fort Worth, Texas',
      priceRange: '700$-1500$',
      type: 'Detached House',
    }, 
  ]);

  const handleEdit = (id) => {
    const propertyToEdit = properties.find((property) => property.id === id);
    const newAddress = prompt('Edit property address:', propertyToEdit.address);

    if (newAddress) {
      setProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.id === id ? { ...property, address: newAddress } : property
        )
      );
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this property?');
    if (confirmDelete) {
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== id)
      );
    }
  };

  return (
    <div className="bg-opacity-14 p-8 pb-14   shadow-md">
      <h2 className="text-2xl font-extrabold font-raleway py-4 text-[#2E86AB] mb-6">Current Property Requests</h2>
      {properties.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-3xl shadow-lg p-4 flex flex-col "
          >
            <img
              src={property.image} 
              alt="Property"
              className="w-full  object-cover rounded-3xl mb-4"
            />
            <h3 className="text-md font-medium  ">{property.address}</h3>
            <p className="text-sm ">{property.priceRange}</p>
            <p className="text-sm  mb-4">{property.type}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(property.id)}
                className="bg-[#2E86AB] text-white px-4 py-2 rounded-full hover:bg-[#1E5D7B]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(property.id)}
                className="bg-[#A6C48A] text-white px-4 py-2 rounded-full hover:bg-[#86A871]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
          ) : (
            // Show "No Current Request" if no properties
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
          )}
      <div className="mt-8 flex pt-8 justify-center">
        <button className="bg-[#FF9472] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#E77A56]">
          Request New Property
        </button>
      </div>
    </div>
  );
};

export default CurrentRequests2;
