import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/rRtWw7sV/young-mother-working-from-home-with-daughter.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Delicious food"
        />
        <div>
            
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Welcome to Langauge master</h1>
          <p className="py-6 text-gray-600">
            Discover, Langauage, and learn your favorite langauge with the  best teachers. <br /> Start your culinary journey today!
          </p>
          <Link to="/find-tutior" className="btn btn-primary">Browse tuitor</Link>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;