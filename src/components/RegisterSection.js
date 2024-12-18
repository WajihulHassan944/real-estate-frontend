import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterSection = () => {
  // State to control the visibility of the buttons
  const [showButtons, setShowButtons] = useState(false);

  // Function to toggle button visibility
  const toggleButtons = () => {
    setShowButtons(prevState => !prevState);
  };

  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-[#154D7C] mb-6" style={{ fontFamily:'"Open-sans",sans-serif'}}>Join Us Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Whether you are a care provider, landlord, or agent, we offer a platform that connects you to the best opportunities. Register today and become a part of PropertyConnectHub.
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        {/* The "Register Now" button */}
        <button
          onClick={toggleButtons}
          className="bg-[#C64C7B] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
        >
          Register Now
        </button>

        {/* Conditional rendering of the four buttons */}
        {showButtons && (
          <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
            <Link to="/register-care-provider" className="w-full">
              <button className="bg-[#C64C7B] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 w-full">
                Register as Care Provider
              </button>
            </Link>
            <Link to="/register-agents-care-provider" className="w-full">
              <button className="bg-[#C64C7B] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 w-full">
                Register as Agent for CP
              </button>
            </Link>
            <Link to="/register-landlord" className="w-full">
              <button className="bg-[#C64C7B] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 w-full">
                Register as Landlord
              </button>
            </Link>
            <Link to="/register-agent" className="w-full">
              <button className="bg-[#C64C7B] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 w-full">
                Register as Agent
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterSection;
