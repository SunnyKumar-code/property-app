import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-purple-600 font-bold">${property.price}/month</p>
        <div className="flex space-x-2 text-gray-500">
          <span>{property.beds} Beds</span>
          <span>{property.bathrooms} Bathrooms</span>
          <span>{property.size}m²</span>
        </div>
      </div>
      {property.popular && <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">Popular</span>}
    </div>
  );
};

export default PropertyCard;