import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaTimes, FaBars } from 'react-icons/fa';
import "../assets/css/header/header.css";
import Logo from "../../src/assets/images/Property-care-hub-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterMenuOpen, setIsRegisterMenuOpen] = useState(false); // Register dropdown state
  const menuRef = useRef(null);
  const registerDropdownRef = useRef(null);
  const { isAuthenticatedLandlord } = useSelector((state) => state.auth);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleRegisterMenu = () => setIsRegisterMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  const handleLogout = () => {
    dispatch(logout());    
    alert("Successfully logged out 👋");
    navigate('/');
  };
  


  const menuDropdown = useMemo(() => (
    isMenuOpen && (
      <div ref={menuRef} className="lg:hidden flex flex-col items-center bg-white shadow-md py-10 mt-2 space-y-2">
        <Link className="text-[#000000] text-lg py-2" to="/Services">
          Our Services
        </Link>
  
        {isAuthenticatedLandlord ? (
       
        <>    <div className="search-mobile">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-8 pr-4 border border-[#a53864] rounded-full focus:outline-none w-full sm:w-auto focus:ring-1 focus:ring-[#a53864] focus:shadow-md"
          />
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#a53864]" />
        </div>
      </div>
          <Link
            className="bg-[#C64C7B] text-white px-4 py-2 rounded-lg text-sm sm:text-md hover:bg-[#a53864] hover:shadow-lg transition duration-300 ease-in-out"
            onClick={handleLogout}
         >
            Logout
          </Link>
          </>
        ) : (
         
          <>
            <Link className="text-[#000000] text-lg py-2" to="/login">
              Sign In
            </Link>
            <button
              onClick={toggleRegisterMenu}
              className="text-[#a53864] text-lg py-2 hover:underline"
            >
              Register
            </button>
            {isRegisterMenuOpen && (
              <div className={`register-dropdown-mobile ${isRegisterMenuOpen ? 'show' : ''}`}>
                <Link
                  className="text-[#000000] text-lg py-2"
                  to="/register-care-provider"
                >
                  Register as Care Provider
                </Link>
                <Link
                  className="text-[#000000] text-lg py-2"
                  to="/register-agents-care-provider"
                >
                  Register as Agent for CP
                </Link>
                <Link className="text-[#000000] text-lg py-2" to="/register-agent">
                  Register as Agent
                </Link>
                <Link className="text-[#000000] text-lg py-2" to="/register-landlord">
                  Register as Landlord
                </Link>
              </div>
            )}
            <div className="search-mobile">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 pl-8 pr-4 border border-[#a53864] rounded-full focus:outline-none w-full sm:w-auto focus:ring-1 focus:ring-[#a53864] focus:shadow-md"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#a53864]" />
              </div>
            </div>
          </>
        )}
      </div>
    )
  ), [isMenuOpen, isRegisterMenuOpen, isAuthenticatedLandlord]);
  
  

  return (
    <header className="w-full border-b shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 relative header-container" >
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-[#2E86AB] font-montserrat font-bold text-xl sm:text-lg md:text-base lg:text-2xl logo-text">
            <img src={Logo} alt='logo' className='logo-image' />
            <p>Property Care Hub</p>
          </Link>

        </div>

        <div className="flex items-center space-x-6 ml-auto hidden lg:flex">
  {isAuthenticatedLandlord ? (
  
    <>
      <Link className="text-[#000000] text-lg hover:text-[#C64C7B]" to="/Services">
        Our Services
      </Link>
      <div className="relative mx-auto sm:ml-8 w-11/12 sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-8 pr-4 border border-[#C64C7B] rounded-full focus:outline-none w-full sm:w-auto focus:ring-1 focus:ring-[#C64C7B] focus:shadow-md"
        />
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#C64C7B]" />
      </div>
      <Link
        className="bg-[#C64C7B] text-white px-4 py-2 rounded-lg text-sm sm:text-md hover:bg-[#a53864] hover:shadow-lg transition duration-300 ease-in-out"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </>
  ) : (
   
    <>
      <Link className="text-[#000000] text-lg hover:text-[#C64C7B]" to="/Services">
        Our Services
      </Link>
      <div className="relative mx-auto sm:ml-8 w-11/12 sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-8 pr-4 border border-[#C64C7B] rounded-full focus:outline-none w-full sm:w-auto focus:ring-1 focus:ring-[#C64C7B] focus:shadow-md"
        />
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#C64C7B]" />
      </div>
      <Link
        to="/login"
        className="bg-[#C64C7B] text-white px-4 py-2 rounded-lg text-sm sm:text-md hover:bg-[#a53864] hover:shadow-lg transition duration-300 ease-in-out"
      >
        Sign In
      </Link>
      <div className="register">
        <button
          onClick={toggleRegisterMenu}
          className="bg-[#C64C7B] text-white px-4 py-2 rounded-lg text-sm sm:text-md hover:bg-[#a53864] hover:shadow-lg transition duration-300 ease-in-out"
        >
          Register
        </button>
        <div
          className={`register-dropdown ${isRegisterMenuOpen ? 'show' : ''}`}
          ref={registerDropdownRef}
        >
          <Link className="text-[#000000] text-lg py-2" to="/register-care-provider">
            Register as Care Provider
          </Link>
          <Link className="text-[#000000] text-lg py-2" to="/register-agents-care-provider">
            Register as Agent for CP
          </Link>
          <Link className="text-[#000000] text-lg py-2" to="/register-agent">
            Register as Agent
          </Link>
          <Link className="text-[#000000] text-lg py-2" to="/register-landlord">
            Register as Landlord
          </Link>
        </div>
      </div>
    </>
  )}
</div>






        
        <div className="lg:hidden flex items-center">
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
    
      </div>

      {menuDropdown}

    </header>
  );
};

export default Header;
