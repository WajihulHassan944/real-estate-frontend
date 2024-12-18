import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/authSlice';
import { useDispatch } from 'react-redux';

const SideNav = ({ showMenu, toggleMenu, onLinkClick, activeLink }) => {
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
          className={`sideNavLink ${activeLink === 'profile' ? 'active' : ''}`}
          onClick={() => onLinkClick('profile', 'profile')}
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
          className={`sideNavLink ${activeLink === 'uploadProperty' ? 'active' : ''}`}
          onClick={() => onLinkClick('uploadProperty', 'uploadProperty')}
        >
          Upload Property
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'matchmaker' ? 'active' : ''}`}
          onClick={() => onLinkClick('matchmaker', 'matchmaker')}
        >
          Matchmaker
        </Link>
        <Link
          className={`sideNavLink ${activeLink === 'inactiveListings' || activeLink === 'viewPropertyInactive' ? 'active' : ''}`}
          onClick={() => onLinkClick('inactiveListings', 'inactiveListings')}
        >
          Inactive Listings
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

export default SideNav;
