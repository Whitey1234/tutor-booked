import React from 'react';
import { Link } from 'react-router'; // ✅ Corrected import

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://i.ibb.co/rRtWw7sV/young-mother-working-from-home-with-daughter.jpg"
          className="max-w-sm w-full rounded-lg shadow-2xl"
          alt="Learning Together"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to  Language Master
          </h1>
          <p className="py-4 text-base-content/80">
            Discover, explore, and master your favorite languages with top-rated tutors.
            <br />
            Start your learning journey today!
          </p>
          <Link to="/find-tutior" className="btn btn-primary mt-2">
            Browse Tutors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
