import React, { useState, useEffect } from 'react';
import { envVars } from '../../config';
import { Link } from 'react-router';

const AllCampaigns = () => {
  const [tutors, setTutors] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch(`${envVars.backend_origin}/addtutior`)
      .then(res => res.json())
      .then(data => setTutors(data))
      .catch(err => console.error('Failed to fetch tutors:', err));
  }, []);

  const sortedTutors = [...tutors].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'language') return a.language.localeCompare(b.language);
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-center md:text-left">All Campaigns</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="language">Language (A-Z)</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>

      {sortedTutors.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No tutors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow hover:shadow-md p-4 flex flex-col"
            >
              <img
                src={tutor.image || 'https://via.placeholder.com/300x180'}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{tutor.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {tutor.category} | {tutor.language}
              </p>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                {tutor.description?.slice(0, 100) || "No description available."}...
              </p>
              <Link to={`/tutor-details/${tutor._id}`}>
               <button className="btn btn-primary btn-sm w-full">See More</button>
              </Link>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCampaigns;
