import React from 'react';
import Nav from '../../components/Header/Nav';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top: Navbar */}
      <Nav />

      {/* Middle: Dynamic Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bottom: Footer */}
      <Footer />
    </div>
  );
};

export default Root;
