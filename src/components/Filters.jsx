import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";

const Filters = () => {
  const [filters, setFilters] = useState({
    location: "",
    moveInDate: "",
    priceRange: "",
    propertyType: "",
  });

  const [likedProperties, setLikedProperties] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
  };

  const toggleFavorite = (property) => {
    setLikedProperties((prevLikedProperties) => {
      if (prevLikedProperties.some((item) => item.id === property.id)) {
        return prevLikedProperties.filter((item) => item.id !== property.id); 
      } else {
        return [...prevLikedProperties, property]; 
      }
    });
  };

  const uniqueLocations = ["", ...new Set(properties.map((p) => p.location.split(",")[1].trim()))];
  const uniquePropertyTypes = ["", ...new Set(properties.map((p) => p.type))];

  const filteredProperties = properties.filter((property) => {
    const locationMatch = !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase());
    
    let priceMatch = true;
    if (filters.priceRange === "$500-$2,500") {
      priceMatch = property.price >= 500 && property.price <= 2500;
    } else if (filters.priceRange === "$2,500-$5,000") {
      priceMatch = property.price > 2500 && property.price <= 5000;
    } else if (filters.priceRange === "$5,000+") {
      priceMatch = property.price > 5000;
    }

    const typeMatch = !filters.propertyType || property.type === filters.propertyType;

    const dateMatch = !filters.moveInDate || new Date(property.availableDate) >= new Date(filters.moveInDate);

    return locationMatch && priceMatch && typeMatch && dateMatch;
  });

  const displayedProperties = showFavorites ? likedProperties : filteredProperties;

  return (
    <section className=" p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-center mb-4">Find Your Rental Home</h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Locations</option>
          {uniqueLocations.filter((loc) => loc).map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <input
          type="date"
          name="moveInDate"
          value={filters.moveInDate}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        />

        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Prices</option>
          <option value="$500-$2,500">$500 - $2,500</option>
          <option value="$2,500-$5,000">$2,500 - $5,000</option>
          <option value="$5,000+">$5,000+</option>
        </select>

        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Types</option>
          {uniquePropertyTypes.filter((type) => type).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button
          className="bg-purple-400 text-black px-5 py-3 rounded-md w-full md:w-auto font-semibold hover:bg-purple-500 cursor-pointer mt-4 md:mt-0"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "View All Properties" : `View Favorites (${likedProperties.length})`}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              toggleFavorite={toggleFavorite}
              isFavorited={likedProperties.some((item) => item.id === property.id)}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-400">No properties available</p>
        )}
      </div>
    </section>
  );
};

export default Filters;