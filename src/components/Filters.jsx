import React, { useState } from 'react';
import { properties } from '../data/properties';

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: '', 
    moveInDate: '',
    priceRange: '', 
    propertyType: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilter({ ...filters, [name]: value }); 
  };

  const uniqueLocations = ['', ...new Set(properties.map(p => p.location.split(',')[1].trim()))].map(loc => `${loc}`);
  const uniquePropertyTypes = ['', ...new Set(properties.map(p => p.type))];

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Search properties to rent</h2>
      <div className="flex flex-col items-center w-full md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
        <select 
          name="location" 
          value={filters.location} 
          onChange={handleChange} 
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="">All Locations</option>
          {uniqueLocations.filter(loc => loc).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <input 
          type="date" 
          name="moveInDate" 
          value={filters.moveInDate} 
          onChange={handleChange} 
          className="border p-2 rounded w-full md:w-auto" 
        />
        <select 
          name="priceRange" 
          value={filters.priceRange} 
          onChange={handleChange} 
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="">All Prices</option>
          <option>$500-$2,500</option>
          <option>$2,500-$5,000</option>
          <option>$5,000+</option>
        </select>
        <select 
          name="propertyType" 
          value={filters.propertyType} 
          onChange={handleChange} 
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="">All Types</option>
          {uniquePropertyTypes.filter(type => type).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button 
          className="bg-purple-500 text-white px-4 py-2 rounded w-full md:w-auto"
          onClick={() => onFilter(filters)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;