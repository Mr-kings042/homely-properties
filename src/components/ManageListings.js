import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import EditPropertyModal from './EditPropertyModal';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import property from '../images/property.png'

const sampleProperties = Array(6).fill().map(() => ({
  id: Math.random().toString(36).substr(2, 9),
  title: "4 bedroom apartment",
  location: "GRA, Port Harcourt Rivers state",
  price: "500,000.00",
  totalFees: "700,000.00",
  status: "Available",
  image: property
}));

function ManageListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState(sampleProperties);
  const [editingProperty, setEditingProperty] = useState(null);

  const handleDelete = (id) => {
    setProperties(properties.filter(property => property.id !== id));
  };

  const handleEdit = (id) => {
    const propertyToEdit = properties.find(property => property.id === id);
    setEditingProperty(propertyToEdit);
  };

  const handleSaveEdit = (editedProperty) => {
    setProperties(properties.map(property => 
      property.id === editedProperty.id ? editedProperty : property
    ));
    setEditingProperty(null);
  };

  const handleCloseEdit = () => {
    setEditingProperty(null);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-[#8B5E34] text-white px-6 py-2 rounded-md hover:bg-[#704B2A]">
          Add listing
        </button>
      </div>

      {/* Property Listings */}
      <h1 className="text-2xl font-bold mb-6">Property Listings</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* Edit Property Modal */}
      {editingProperty && (
        <EditPropertyModal
          property={editingProperty}
          onSave={handleSaveEdit}
          onClose={handleCloseEdit}
        />
      )}

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            "What is Homely apartment?",
            "How do I sign up on the platform?",
            "Can I filter apartments by location, budget, and type?",
            "How do I contact an agent for more details?",
            "Are the accommodations verified?",
            "Can I schedule a property viewing?",
            "Lorem ipsum dolor sit amet?"
          ].map((question, index) => (
            <div key={index} className="border rounded-lg p-4">
              <button className="flex justify-between items-center w-full text-left">
                <span>{question}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ManageListings;

