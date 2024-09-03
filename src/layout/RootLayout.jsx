import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, Footer} from '../components'; 


const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This is where routed components will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
