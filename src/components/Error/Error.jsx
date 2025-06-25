import React from 'react';
import { Link } from 'react-router';


const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 flex-col-reverse">
       <img src="https://i.ibb.co/4wQfb07C/404-page.png" alt="" />
       <Link className='btn btn-accent my-2 text-center' to={'/'}> Home</Link>
    </div>
  );
};

export default Error;
