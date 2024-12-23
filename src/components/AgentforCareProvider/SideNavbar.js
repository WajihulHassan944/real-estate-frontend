import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/authSlice';
import { useDispatch } from 'react-redux';

const SideNavbar =({ showMenu, toggleMenu, onLinkClick, activeLink})=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleLogout = () => {
      dispatch(logout());    
      alert("Successfully logged out 👋");
      navigate('/');
    };


  return (
    <div>
      <div className="toggleSideMenu" onClick={toggleMenu}>
        <p>{showMenu ? 'Close Menu' : 'Menu'}</p>
      </div>
      <div className={`dashboardNavigationDynamic ${showMenu ? 'show' : ''}`}>
        <Link
          className={`sideNavLink ${activeLink === 'dashboard' ? 'active' : ''}`}
          onClick={() => onLinkClick('dashboard', 'dashboard')}
        >
          Dashboard
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'profile1' ? 'active' : ''}`}
          onClick={() => onLinkClick('profile1', 'profile1')}
        >
          My Profile
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'searchProperties' ? 'active' : ''}`}
          onClick={() => onLinkClick('searchProperties', 'searchProperties')}
        >
          Search Properties 
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'manageClients' ? 'active' : ''}`}
          onClick={() => onLinkClick('manageClients', 'manageClients')}
        >
          Manage Clients
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'savedProperties' ? 'active' : ''}`}
          onClick={() => onLinkClick('savedProperties', 'savedProperties')}
        >
          Saved Properties
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'leasedProperties' ? 'active' : ''}`}
          onClick={() => onLinkClick('leasedProperties', 'leasedProperties')}
        >
       Leased Properties
        </Link>
        
      
       
        <Link
          className={`sideNavLink ${activeLink === 'logout' ? 'active' : ''}`}
         onClick={handleLogout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar
