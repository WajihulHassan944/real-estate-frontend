import React, { useState } from 'react';
import myImage from '../../assets/img/house5.png';
import './style.css'
import Footer from '../Footer.js'
import Header from '../Header.js'
import SideNavCareProvider from './SideNav.js';
import KeyStatsCareProvider from './KeyStats.js';
import EditProfileCareProvider from './EditProfile.js';
import SavedProperties from './SavedProperties.js';
import LeasedProperties from './LeasedProperties.js';
import MyRequests from './MyRequests.js';
import RequestPropertyForm from './RequestProperty/RequestPropertyForm.js';
import SearchProperties from './SearchProperties.js';
import { useSelector } from 'react-redux';
import RequestDetails from './RequestDetails.jsx';
function CareProviderDashBoard() {
  const careprovider = useSelector((state) => state.careProvider); 
  const [showMenu, setShowMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [activeLink, setActiveLink] = useState('dashboard');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
    
  const handleLinkClick = (componentName, linkName) => {
    setActiveComponent(componentName);
    setActiveLink(linkName);  
    setShowMenu(false); 
  };
  
  

  // Function to toggle the 'show' class on the sidebar
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
  const handleViewDetailsRequest = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent('viewRequest'); // Switch to edit Request component
    setActiveLink('viewRequest');
  };


  return (
    <div className="bg-white shadow-lg rounded-lg ">
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center  mb-8 py-[100px] bg-gradient-to-b from-[#154D7C]/25 to-white">
        <div className='text-center'>
        <div>
          <h1 className="text-4xl  md:text-4xl lg:text-6xl leading-normal font-raleway font-bold text-[#000000]">
            Care Provider
          </h1>
          <h1 className="text-4xl  md:text-4xl lg:text-6xl leading-normal font-raleway font-bold text-[#000000]">
          Dashboard
          </h1> 
          </div>
          <p className="text-3xl text-[#2E86AB] font-bold font-montserrat mt-2">
            Welcome back, {careprovider.fullName}!
          </p>
          
          <p className="text-xl text-[#C64C7B] font-medium font-raleway mt-2">
            Live in Comfort, Care with Confidence.
          </p>
        </div>

        <div className="flex justify-center">
        <img 
  src={myImage} 
  alt="Care Provider" 
  className="w-full sm:w-4/5 md:w-3/4 h-auto"
/>

</div>

      </div>




      
<div className='dashboardDynamicSection'>     

<SideNavCareProvider showMenu={showMenu} toggleMenu={toggleMenu} onLinkClick={handleLinkClick} activeLink={activeLink} />
{activeComponent === 'dashboard' && <KeyStatsCareProvider  />}
{activeComponent === 'profile' && <EditProfileCareProvider />}

{activeComponent === 'savedProperties' && <SavedProperties />}
{activeComponent === 'leasedProperties' && <LeasedProperties />}
{activeComponent === 'requestProperty' && <RequestPropertyForm />}
{activeComponent === 'myRequests' && <MyRequests onViewDetailsRequest={handleViewDetailsRequest} />}
{activeComponent === 'searchProperties' && <SearchProperties />}
{activeComponent === 'viewRequest' && <RequestDetails id={selectedPropertyId} />}

    </div>
    
    
      <Footer />
    </div>
  );
}

export default CareProviderDashBoard;
