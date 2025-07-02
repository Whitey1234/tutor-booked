import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { envVars } from '../../config';

const OurTutors
 = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
   fetch(`${envVars.backend_origin}/addtutior`)
      .then((res) => res.json())
      .then((data) => {
        console.log (data)
        // Pick 4 random items from the array
        const shuffled = data.sort(() => 0.5 - Math.random());
        setTutors(shuffled.slice(0, 4));
      });
  }, []);

  return (
    <section className="my-16 px-4 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
         Tutor Example 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
          >
            <img
              src={tutor.image || 'https://via.placeholder.com/400x250'}
              alt={tutor.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{tutor.name}</h3>
              <p className="text-sm text-gray-600 flex-grow">
                {tutor.description?.slice(0, 100) || 'No description available'}...
              </p>
              <Link
                to={`/tutor-details/${tutor._id}`}
                className="btn btn-sm btn-primary mt-4 self-start"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTutors
;
