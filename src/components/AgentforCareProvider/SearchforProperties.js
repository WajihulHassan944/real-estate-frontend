import React, { useState, useEffect } from "react";

const SearchforProperties = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    leaseTerm: "",
    requiredFeatures: "",
  });
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Simulated API fetch (Replace with actual API call)
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    const mockProperties = [
      {
        id: 1,
        type: "Apartment",
        location: "London",
        leaseTerm: "Long-term",
        features: "Parking, Garden",
      },
      {
        id: 2,
        type: "Detached House",
        location: "Manchester",
        leaseTerm: "Short-term",
        features: "Accessibility, Garden",
      },
      {
        id: 3,
        type: "Flat",
        location: "Birmingham",
        leaseTerm: "Flexible",
        features: "Parking",
      },
    ];
    setProperties(mockProperties);
    setFilteredProperties(mockProperties); // Initially show all
  };

  const handleFilter = () => {
    const { location, propertyType, leaseTerm, requiredFeatures } = filters;

    const results = properties.filter((property) => {
      const matchLocation = location
        ? property.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchType = propertyType
        ? property.type.toLowerCase() === propertyType.toLowerCase()
        : true;
      const matchLease = leaseTerm
        ? property.leaseTerm.toLowerCase() === leaseTerm.toLowerCase()
        : true;
      const matchFeatures = requiredFeatures
        ? property.features.toLowerCase().includes(requiredFeatures.toLowerCase())
        : true;

      return matchLocation && matchType && matchLease && matchFeatures;
    });

    setFilteredProperties(results);
  };

  const handleReset = () => {
    setFilters({
      location: "",
      propertyType: "",
      leaseTerm: "",
      requiredFeatures: "",
    });
    setFilteredProperties(properties);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Filter Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search for Properties</h2>
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={filters.propertyType}
            onChange={(e) =>
              setFilters({ ...filters, propertyType: e.target.value })
            }
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Detached House">Detached House</option>
            <option value="Flat">Flat</option>
            <option value="Studio">Studio</option>
          </select>
          <select
            value={filters.leaseTerm}
            onChange={(e) =>
              setFilters({ ...filters, leaseTerm: e.target.value })
            }
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Lease Term</option>
            <option value="Short-term">Short-term</option>
            <option value="Long-term">Long-term</option>
            <option value="Flexible">Flexible</option>
          </select>
          <input
            type="text"
            placeholder="Required Features (e.g., Parking)"
            value={filters.requiredFeatures}
            onChange={(e) =>
              setFilters({ ...filters, requiredFeatures: e.target.value })
            }
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div>
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow rounded-lg p-4 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.type}
                </h3>
                <p className="text-gray-600">Location: {property.location}</p>
                <p className="text-gray-600">Lease Term: {property.leaseTerm}</p>
                <p className="text-gray-600">Features: {property.features}</p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                  Request Connection
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchforProperties;
