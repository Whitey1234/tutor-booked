import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowRight, FaChalkboardTeacher } from 'react-icons/fa';
import { envVars } from '../../config';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${envVars.backend_origin}/addtutior`)
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((tutor) => tutor.category.trim()))
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleClick = (category) => {
    navigate(`/find-tutior?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="my-10 px-4 max-w-6xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6 text-center">Explore Tutors by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.slice(0, 9).map((category, index) => (
          <div
            key={index}
            onClick={() => handleClick(category)}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-blue-500 text-xl" />
              <span className="font-semibold">{category.trim()} Tutors</span>
            </div>
            <FaArrowRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
