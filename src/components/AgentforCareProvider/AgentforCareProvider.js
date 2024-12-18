import React, { useState, useEffect, useRef } from 'react';
import Discover from '../CareProviderDashBoard/Discover';
import CurrentRequests from '../CareProviderDashBoard/CurrentRequests';
import SearchforProperties from './SearchforProperties'; // Import the SearchProperties component
import Image7 from '../../assets/images/image7.png';
import CurrentRequests2 from './CurrentRequests2';
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
function AgentforCareProvider() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to track the menu

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg ">
     <Header/>
     
        <>
        <div className="relative pb-14">
        {/* Burger Icon and Menu Text */}
        <div className="flex justify-start items-center px-4 py-10 ">
          <button
            className="text-[#2E86AB] text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <h1 className=" font-montserrat text-xl text-[#2E86AB] font-bold ml-2">Menu</h1>
        </div>

        {/* Menu Items */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-[#2E86AB]`}
        >
          <div className="flex flex-col items-center py-4 space-y-2">
          <Link
              to="/Home"
              className="text-white text-md py-2 px-4 text-center hover:underline rounded-md border-b border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
           
            <Link
              to="/history"
              className="text-white text-md py-2 px-4 text-center hover:underline rounded-md border-b border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
           
            
            <Link
              to="/About"
              className="text-white text-md py-2 px-4 text-center hover:underline rounded-md border-b border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Services"
              className="text-white text-md py-2 px-4 text-center hover:underline rounded-md border-b border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
          {/* Dashboard View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center mb-8">
            <div className="text-center">
              <div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl leading-normal font-raleway font-bold text-[#000000]">
                  Agents for Care
                </h1>
                <h1 className="text-4xl md:text-4xl lg:text-5xl leading-normal font-raleway font-bold text-[#000000]">
                  Provider Dashboard
                </h1>
              </div>
              <p className="text-3xl text-[#2E86AB] font-bold font-montserrat mt-8">
                Welcome back, Anna!
              </p>

              <p className="text-xl text-[#FF9472] font-medium font-raleway mt-2">
                Your Hub for Care-Driven Property Solutions.
              </p>
             
            </div>

            <div className="flex justify-center">
              <img
                src={Image7}
                alt="Care Provider"
                className="w-1/2 sm:w-3/4 md:w-2/3 max-w-xl h-auto"
              />
            </div>
          </div>
          <CurrentRequests2/>
          <Discover />
        </>
    
       
      
      <Footer />
    </div>
  );
}

export default AgentforCareProvider;
