import React from 'react';

function PropertyCard({ property, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.location}</p>
        <div className="mt-2">
          <div className="font-bold text-lg">₦{property.price}/yr</div>
          <div className="text-sm">Total fees = ₦{property.totalFees}</div>
          <div className={`text-sm ${property.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
            {property.status}
          </div>
        </div>
      </div>
      <div className="flex gap-2 p-4 border-t">
        <button
          onClick={() => onDelete(property.id)}
          className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(property.id)}
          className="flex-1 bg-[#8B5E34] text-white py-2 px-4 rounded hover:bg-[#704B2A]"
        >
          Edit listing
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;

