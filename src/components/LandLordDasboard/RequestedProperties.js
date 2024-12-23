import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image14 from '../../assets/images/image2.png';
import { baseUrl } from "../../const/url.const";

const RequestedProperties = ({ propertyId }) => {
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/properties`);
        const properties = response.data.properties;

        // Find the property that matches the given propertyId
        const propertyDetails = properties.find(property => property.id === parseInt(propertyId));
        setProperty(propertyDetails);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  // If the property is not yet loaded, show a loading message
  if (!property) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0.3turn, rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${Image14})`,
        width: '100%',
        borderTopLeftRadius: '30px'
      }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold font-raleway text-center text-white pt-10 mb-8">
          Property Details {propertyId}
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <PropertyDetail title="Property Type" value={property.propertyType} />
          <PropertyDetail title="Property Status" value={property.status} />
          <PropertyDetail title="Property Address" value={property.address} />
          <PropertyDetail title="City" value={property.city} />
          <PropertyDetail title="Postal Code" value={property.postalCode} />
        
          <PropertyDetail title="Number of Bedrooms" value={property.numOfBedrooms} />
          <PropertyDetail title="HMO" value={property.isHMO ? "Yes" : "No"} />
          <PropertyDetail title="Article 4" value={property.isArticle4 ? "Yes" : "No"} />
          <PropertyDetail title="HMO License" value={property.hmoLicense ? "Yes" : "No"} />
          <PropertyDetail title="Fire Door" value={property.fireDoor ? "Yes" : "No"} />
          <PropertyDetail title="Fire Alarm" value={property.fireAlarm ? "Yes" : "No"} />
          <PropertyDetail title="Number of Reception Rooms" value={property.numOfReceptionRooms} />
          <PropertyDetail
            title="Bathrooms"
            value={`Upstairs: ${property.numBathrooms}, Downstairs: ${property.numBathroomsInLocation}`}
          />
          <PropertyDetail
            title="Separate Toilets"
            value={`Upstairs: ${property.numToilets}, Downstairs: ${property.numToiletsInLocation}`}
          />
          <PropertyDetail title="Double Glazing" value={property.doubleGlazing ? "Yes" : "No"} />
          <PropertyDetail title="Central Heating" value={property.centralHeating ? "Yes" : "No"} />
          <PropertyDetail title="Furnished" value={property.furnished ? "Yes" : "No"} />
          <PropertyDetail title="Partly Furnished" value={property.partlyFurnished ? "Yes" : "No"} />
          <PropertyDetail title="Unfurnished" value={property.unfurnished ? "Yes" : "No"} />
          <PropertyDetail title="Rent Amount" value={`${property.rentAmount}`} />
          <PropertyDetail 
  title="Available Date" 
  value={property.availableDate.split('T')[0]} 
/>
  <PropertyDetail title="Lease Terms" value={property.leaseTerms.join(", ")} />
          <PropertyDetail title="Parking Availability" value={property.parkingAvailability} />
          <PropertyDetail
            title="Accessibility Features"
            value={property.accessibilityFeatures.join(", ")}
          />
          <PropertyDetail title="Property Description" value={property.propertyDescription} />
  
          <div className="border rounded-md p-4 font-montserrat bg-white">
            <h2 className="text-lg font-semibold text-[#154D7C] mb-2">Photos</h2>
            <ul className="list-disc pl-5">
              {property.photos.length ? (
                property.photos.map((photo, index) => (
                  <li key={index}>
                    <a
                      href="#!"
                      onClick={() =>
                        window.open(
                          `${baseUrl}/uploads/${photo.replace(/^.*[\\/]uploads[\\/]/, '')}`,
                          "_blank"
                        )
                      }
                      className="underline"
                    >
                      Photo {index + 1}
                    </a>
                  </li>
                ))
              ) : (
                <p>No photos available</p>
              )}
            </ul>
          </div>
  
          <div className="border rounded-md p-4 font-montserrat bg-white">
            <h2 className="text-lg font-semibold text-[#154D7C] mb-2">Floor Plans</h2>
            {property.floorPlans ? (
              <a
                href="#!"
                onClick={() =>
                  window.open(
                    `${baseUrl}/uploads/${property.floorPlans[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
                    "_blank"
                  )
                }
                className="underline"
              >
                View Floor Plan
              </a>
            ) : (
              <p>No floor plans available</p>
            )}
          </div>
          <div className="border rounded-md p-4 font-montserrat bg-white">
  <h2 className="text-lg font-semibold text-[#154D7C] mb-2">Inventory</h2>
  {property.inventory && property.inventory.length > 0 ? (
    <a
      href="#!"
      onClick={() =>
        window.open(
          `${baseUrl}/uploads/${property.inventory[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
          "_blank"
        )
      }
      className="underline"
    >
      View Inventory
    </a>
  ) : (
    <p>No inventory available</p>
  )}
</div>

          <div className="border rounded-md p-4 font-montserrat bg-white">
            <h2 className="text-lg font-semibold text-[#154D7C] mb-2">Documents</h2>
            {property.epc && (
              <a
                href="#!"
                onClick={() =>
                  window.open(
                    `${baseUrl}/uploads/${property.epc[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
                    "_blank"
                  )
                }
                className="block mb-2 underline"
              >
                EPC
              </a>
            )}
            {property.gasCertificate && (
              <a
                href="#!"
                onClick={() =>
                  window.open(
                    `${baseUrl}/uploads/${property.gasCertificate[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
                    "_blank"
                  )
                }
                className="block mb-2 underline"
              >
                Gas Certificate
              </a>
            )}
            {property.eicr && (
              <a
                href="#!"
                onClick={() =>
                  window.open(
                    `${baseUrl}/uploads/${property.eicr[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
                    "_blank"
                  )
                }
                className="block mb-2 underline"
              >
                EICR
              </a>
            )}
            {property.insurance && (
              <a
                href="#!"
                onClick={() =>
                  window.open(
                    `${baseUrl}/uploads/${property.insurance[0].replace(/^.*[\\/]uploads[\\/]/, '')}`,
                    "_blank"
                  )
                }
                className="block mb-2 underline"
              >
                Insurance
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
    
  };

const PropertyDetail = ({ title, value }) => (
  <div className="border rounded-md bg-white font-montserrat shadow-md p-4">
    <h2 className="text-lg font-semibold text-[#154D7C] mb-2">{title}</h2>
    <p>{value}</p>
  </div>
);

export default RequestedProperties;
