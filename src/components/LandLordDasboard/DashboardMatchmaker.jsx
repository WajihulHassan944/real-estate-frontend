import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../../assets/css/dashboardMatchmaker/dashboardMatchmaker.css";
import { FiSearch } from 'react-icons/fi';
import MarkerHouse from "../../assets/images/houseWithLocationSymbol.png";  // Import your image

const DashboardMatchmaker = () => {
  const mapRef = useRef(null);  // Ref to hold the map container
  const [postcode, setPostcode] = useState("");
  const [matchedLocations, setMatchedLocations] = useState([]);

  const addresses = [
    { id: 1, name: "123 Bath Road, Bath, England", lat: 51.3758, lon: -2.3590, postcode: "BA1" },
    { id: 2, name: "456 Bath Street, Bath, England", lat: 51.3760, lon: -2.3580, postcode: "BA1" },
    { id: 3, name: "789 Bath Avenue, Bath, England", lat: 51.3770, lon: -2.3570, postcode: "BA1" },
    { id: 4, name: "101 Birmingham Lane, Birmingham, England", lat: 52.4862, lon: -1.8904, postcode: "B1" },
    { id: 5, name: "202 Birmingham Crescent, Birmingham, England", lat: 52.4870, lon: -1.8895, postcode: "B1" },
    { id: 6, name: "303 Birmingham Square, Birmingham, England", lat: 52.4880, lon: -1.8880, postcode: "B1" },
    { id: 7, name: "234 Manchester Road, Manchester, England", lat: 53.4808, lon: -2.2426, postcode: "M1" },
    { id: 8, name: "345 Manchester Lane, Manchester, England", lat: 53.4815, lon: -2.2415, postcode: "M1" },
    { id: 9, name: "456 Manchester Place, Manchester, England", lat: 53.4820, lon: -2.2400, postcode: "M1" },
    { id: 10, name: "567 Manchester Crescent, Manchester, England", lat: 53.4830, lon: -2.2390, postcode: "M1" },
    { id: 11, name: "678 Manchester Avenue, Manchester, England", lat: 53.4840, lon: -2.2380, postcode: "M1" },
    { id: 12, name: "789 Edinburgh Road, Edinburgh, Scotland", lat: 55.9533, lon: -3.1883, postcode: "EH1" },
    { id: 13, name: "101 Edinburgh Crescent, Edinburgh, Scotland", lat: 55.9540, lon: -3.1875, postcode: "EH1" },
    { id: 14, name: "202 Edinburgh Square, Edinburgh, Scotland", lat: 55.9550, lon: -3.1860, postcode: "EH1" },
    { id: 15, name: "303 Edinburgh Lane, Edinburgh, Scotland", lat: 55.9560, lon: -3.1850, postcode: "EH1" },
  ];

  useEffect(() => {
    // Initialize the map after the component has mounted
    const map = L.map(mapRef.current).setView([51.5074, -0.1278], 6);

    // Set up the TileLayer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define custom icon for the marker
    const customIcon = L.icon({
      iconUrl: MarkerHouse,  // Use the imported image for the marker
      iconSize: [32, 32],  // Size of the icon
      iconAnchor: [16, 32],  // Anchor point
      popupAnchor: [0, -32]  // Popup offset
    });

    // Add a custom marker for each location with the custom icon
    matchedLocations.forEach(location => {
      L.marker([location.lat, location.lon], { icon: customIcon })
        .addTo(map)
        .bindPopup(location.name);
    });

    // Cleanup map instance on component unmount
    return () => map.remove();
  }, [matchedLocations]);

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handleSearch = () => {
    // Find all locations that match the postcode entered (allow partial matches)
    const matched = addresses.filter(address => address.postcode.startsWith(postcode));
    setMatchedLocations(matched);
  };

  return (
    <div className='matchMakerWrapper'>
      <h1>Search For Care Providers</h1>

      <div className='matchMakerMain'>
        <div className='matchMakerInput'>
          <input
            type="text"
            placeholder='Search with Postcode'
            value={postcode}
            onChange={handlePostcodeChange}
          />
          <FiSearch className='searchIcon' onClick={handleSearch} />
        </div>

        <p>Use the filters to customize your search and find caregivers that match your specific criteria.</p>

        <div className='matchMakerButtonsWrapper'>
          <button>Location</button>
          <button>Property Type</button>
          <button>Number of Bedrooms</button>
        </div>

        <div 
  style={{
    width: '100%', 
    height: 'auto', 
    marginTop: '20px', 
    padding: '15px', 
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
    background: '#fff', 
    borderRadius: '10px'
  }}
>
  <div 
    ref={mapRef} 
    style={{ 
      width: '100%', 
      height: '400px',
      borderRadius:'10px'
    }} 
  />
</div>
</div>
    </div>
  );
};

export default DashboardMatchmaker;
