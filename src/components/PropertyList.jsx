import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const PropertyList = ({ filters }) => {
  const filteredProperties = properties.filter(property => {
    const locationMatch = !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase());
    
    let priceMatch = !filters.priceRange;
    if (filters.priceRange === '$500-$2,500') {
      priceMatch = property.price >= 500 && property.price <= 2500;
    } else if (filters.priceRange === '$2,500-$5,000') {
      priceMatch = property.price > 2500 && property.price <= 5000;
    } else if (filters.priceRange === '$5,000+') {
      priceMatch = property.price > 5000;
    }

    const typeMatch = !filters.propertyType || property.type === filters.propertyType;

    const dateMatch = !filters.moveInDate || new Date() >= new Date(filters.moveInDate);

    return locationMatch && priceMatch && typeMatch && dateMatch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProperties.length === 0 ? (
        <p className="text-gray-600 text-center col-span-full">No properties found matching your criteria.</p>
      ) : (
        filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;