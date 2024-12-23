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
          className={`sideNavLink ${activeLink === 'currentProperties' || activeLink === 'editProperty' || activeLink === 'viewProperty' ? 'active' : ''}`}
          onClick={() => onLinkClick('currentProperties', 'currentProperties')}
        >
          Current Properties 
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'managelandlord' ? 'active' : ''}`}
          onClick={() => onLinkClick('managelandlord', 'managelandlord')}
        >
          Manage Landlords
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'uploadProperty' ? 'active' : ''}`}
          onClick={() => onLinkClick('uploadProperty', 'uploadProperty')}
        >
          Upload Property
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'requestreceived' ? 'active' : ''}`}
          onClick={() => onLinkClick('requestreceived', 'requestreceived')}
        >
       Current Requests
        </Link>
        
        <Link
          className={`sideNavLink ${activeLink === 'inactiveListings1' || activeLink === 'viewPropertyInactive' ? 'active' : ''}`}
          onClick={() => onLinkClick('inactiveListings1', 'inactiveListings1')}
        >
          Inactive Listings
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'matchmaker' ? 'active' : ''}`}
          onClick={() => onLinkClick('matchmaker', 'matchmaker')}
        >
          Matchmaker
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
