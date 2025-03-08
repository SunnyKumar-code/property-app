import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


const PropertyCard = ({ property, toggleFavorite, isFavorited }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg transition-transform transform">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-52 object-cover rounded-lg cursor-pointer"
       
      />
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-xl font-bold text-blue-800">{property.name}</h3>
        <div
          onClick={() => toggleFavorite(property)}
          className="ml-2 cursor-pointer"
        >
          {isFavorited ? (
            <AiFillHeart size={20} className="text-red-600" />
          ) : (
            <AiOutlineHeart size={20} className="text-gray-400" />
          )}
        </div>
      </div>
      <p className="text-gray-700">{property.location}</p>
      <p className="text-blue-600 font-semibold text-lg">${property.price}/month</p>
      <div className="flex justify-between text-gray-600 mt-2 text-sm">
        <span>{property.beds} Beds</span>
        <span>{property.bathrooms} Bathrooms</span>
        <span>{property.size}m²</span>
      </div>
      {property.popular && (
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium mt-3 inline-block">
          Popular
        </span>
      )}

    
    </div>
  );
};

export default PropertyCard;