import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SearchforCareProviders1 = ({onViewDetailsClick}) => {
    const navigate = useNavigate();

    const propertyTypes = [
        "Apartment/Flat",
        "Detached House",
        "Semi-Detached House",
        "Terraced House",
        "Bungalow",
        "Cottage",
        "Other",
    ];

    const budgetOptions = [
        "Below £500",
        "£500 - £1000",
        "£1000 - £1500",
        "Above £1500",
    ];

    const sampleImages = [
        require("../../assets/images/image2.png"),
        require("../../assets/images/image3.png"),
        require("../../assets/images/image5.png"),
        require("../../assets/images/image5.png"),
    ];

    const [sampleData, setSampleData] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedPropertyType, setSelectedPropertyType] = useState("");
    const [otherPropertyType, setOtherPropertyType] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [frequency, setFrequency] = useState("Per Month");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        setSampleData([
            ...Array.from({ length: 72 }, (_, i) => ({
                id: i + 1,
                city: [
                    "Bath",
                    "Birmingham",
                    "Bradford",
                    "Brighton & Hove",
                    "Bristol",
                    "Cambridge",
                    "Canterbury",
                    "Carlisle",
                    "Chelmsford",
                    "Chester",
                    "Chichester",
                    "Colchester",
                    "Coventry",
                    "Derby",
                    "Doncaster",
                    "Durham",
                    "Ely",
                    "Exeter",
                    "Gloucester",
                    "Hereford",
                    "Kingston-upon-Hull",
                    "Lancaster",
                    "Leeds",
                    "Leicester",
                    "Lichfield",
                    "Lincoln",
                    "Liverpool",
                    "London",
                    "Manchester",
                    "Milton Keynes",
                    "Newcastle-upon-Tyne",
                    "Norwich",
                    "Nottingham",
                    "Oxford",
                    "Peterborough",
                    "Plymouth",
                    "Portsmouth",
                    "Preston",
                    "Ripon",
                    "Salford",
                    "Salisbury",
                    "Sheffield",
                    "Southampton",
                    "Southend-on-Sea",
                    "St Albans",
                    "Stoke on Trent",
                    "Sunderland",
                    "Truro",
                    "Wakefield",
                    "Wells",
                    "Westminster",
                    "Winchester",
                    "Wolverhampton",
                    "Worcester",
                    "York",
                    "Armagh",
                    "Bangor",
                    "Belfast",
                    "Lisburn",
                    "Londonderry",
                    "Newry",
                    "Aberdeen",
                    "Dundee",
                    "Dunfermline",
                    "Edinburgh",
                    "Glasgow",
                    "Inverness",
                    "Perth",
                    "Stirling",
                    "Bangor",
                    "Cardiff",
                    "Newport",
                    "St Asaph",
                    "St Davids",
                    "Swansea",
                    "Wrexham",
                ][i % 72],
                propertyType: i % 2 === 0 ? "Apartment/Flat" : "Detached House",
                bedrooms: Math.floor(Math.random() * 5) + 1,
                dateAvailable: `2024-12-${10 + i}`,
                priceRange: Math.random() * 2000 + 300, // Random price value
                frequency: i % 2 === 0 ? "Per Month" : "Per Week",
                imageUrl: sampleImages[i % sampleImages.length],
            })),
        ]);
    }, []);
    

    const filteredData = sampleData.filter((item) => {
        const isFrequencyMatch = item.frequency === frequency || !frequency;
        const isBudgetMatch = (() => {
            if (!selectedBudget) return true;
            const price = item.priceRange;
            if (selectedBudget === "Below £500") return price < 500;
            if (selectedBudget === "£500 - £1000") return price >= 500 && price <= 1000;
            if (selectedBudget === "£1000 - £1500") return price > 1000 && price <= 1500;
            if (selectedBudget === "Above £1500") return price > 1500;
            return true;
        })();

        return (
            (!selectedCity || item.city === selectedCity) &&
            (!selectedPropertyType ||
                item.propertyType === selectedPropertyType ||
                (selectedPropertyType === "Other" && otherPropertyType)) &&
            isBudgetMatch &&
            isFrequencyMatch
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleViewDetails = (id) => {
        onViewDetailsClick(id);
      };
    return (
        <>
           
            <div className="p-6">
                <h1 className="text-2xl font-bold font-montserrat text-center text-[#154D7C] py-8 mb-8">Matchmaker</h1>
                {/* Filters Section */}
                <div className="flex flex-col md:flex-row gap-4 mb-10">
                    {/* City Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">City</label>
                        <select
                            className="w-full border rounded-md p-2"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="">All Cities</option>
                            {[...new Set(sampleData.map((item) => item.city))].map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Property Type Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Property Type</label>
                        <select
                            className="w-full border rounded-md p-2"
                            value={selectedPropertyType}
                            onChange={(e) => {
                                setSelectedPropertyType(e.target.value);
                                if (e.target.value !== "Other") setOtherPropertyType("");
                            }}
                        >
                            <option value="">All Types</option>
                            {propertyTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        {selectedPropertyType === "Other" && (
                            <input
                                type="text"
                                placeholder="Specify other property type"
                                className="mt-2 w-full border rounded-md p-2"
                                value={otherPropertyType}
                                onChange={(e) => setOtherPropertyType(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Budget Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Budget</label>
                        <select
                            className="w-full border rounded-md p-2"
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(e.target.value)}
                        >
                            <option value="">All Budgets</option>
                            {budgetOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Frequency</label>
                        <select
                            className="w-full border rounded-md p-2"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option value="Per Month">Per Month</option>
                            <option value="Per Week">Per Week</option>
                        </select>
                    </div>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {currentItems.map((item) => (
                        <div key={item.id} className="border rounded-3xl p-4 shadow-lg">
                            <img
                                src={item.imageUrl}
                                alt={item.city}
                                className="w-full  object-cover rounded-3xl mb-4"
                            />
                            <h3 className="text-lg font-semibold">{item.city}</h3>
                            <p>Type: {item.propertyType}</p>
                            <p>Bedrooms: {item.bedrooms}</p>
                            <button
                              onClick={() => handleViewDetails(39)}
                                className="mt-4 bg-[#C64C7B]  text-white px-4 py-2 text-sm rounded-3xl "
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-3xl ${currentPage === 1 ? "bg-gray-300" : "bg-[#154D7C] text-white "}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-3xl ${currentPage === totalPages ? "bg-gray-300" : "bg-[#154D7C]  text-white "}`}
                    >
                        Next
                    </button>
                </div>
            </div>
           
        </>
    );
};

export default SearchforCareProviders1;
