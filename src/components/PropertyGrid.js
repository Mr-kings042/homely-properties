import React from 'react';
import property from '../images/property.png';

const properties = Array(6).fill({
  title: "4 bedroom apartment",
  location: "GRA, Port Harcourt Rivers state",
  price: "₦500,000.00/yr",
  totalFees: "₦700,000.00",
  status: "Available",
  image: property,
});

function PropertyGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Property Listing overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <div className="mt-2">
                  <div className="font-bold">{property.price}</div>
                  <div className="text-sm">Total fees = {property.totalFees}</div>
                  <div className="text-sm text-gray-600">{property.status}</div>
                </div>
              </div>
              <div className="flex gap-2 p-4 border-t">
                <button 
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => console.log('Delete clicked')}
                >
                  Delete
                </button>
                <button 
                  className="flex-1 bg-[#8B5E34] text-white py-2 px-4 rounded hover:bg-[#704B2A]"
                  onClick={() => console.log('Edit listing clicked')}
                >
                  Edit listing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyGrid;

