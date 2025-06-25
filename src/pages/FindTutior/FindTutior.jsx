import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useLocation } from 'react-router';
import AllCard from '../../components/AllCard/AllCard';

const FindTutior = () => {
  const data = useLoaderData(); // all tutors from loader
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Get category from URL query
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

  // Filter by category if it's provided
  const categoryFiltered = selectedCategory
    ? data.filter(
        (tutor) =>
          tutor.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      )
    : data;

  // Further filter by search term
  const filteredData = categoryFiltered.filter((tutor) => {
    const search = searchTerm.toLowerCase();
    return (
      tutor.name.toLowerCase().includes(search) ||
      tutor.category.toLowerCase().includes(search) ||
      tutor.language.toLowerCase().includes(search) ||
      tutor.email.toLowerCase().includes(search)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, language, category or email..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No tutors found.</p>
      ) : (
        <div className="grid grid-cols-1  gap-6">
          {filteredData.map((cardData, index) => (
            <AllCard cardData={cardData} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutior;
