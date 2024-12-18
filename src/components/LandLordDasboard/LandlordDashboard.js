import React, { useState} from 'react';
import Footer from '../Footer';
import CurrentProperties from './CurrentProperties';
import Image8 from '../../assets/images/image8.png';
import Header from '../Header';
import "../../assets/css/dashboardSideNavogation/dashboardSideNavigation.css";
import EditProfile from './EditProfile';
import SideNav from './SideNav';
import DashboardMatchmaker from './DashboardMatchmaker';
import KeyStats from './KeyStats';
import InactiveListing from './InactiveListing';
import SearchforCareProviders1 from './SearchforCareProviders1';
import RequestedProperties from './RequestedProperties';
import UploadPropertyForm from './UploadPropertyForm';
import EditPropertyForm from './EditProperty/EditPropertyForm';
import { useSelector } from 'react-redux';

const LandlordDashboard = () => {
  const landlord = useSelector((state) => state.landlord); // Access user details from Redux store
console.log(landlord);
  const [showMenu, setShowMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [activeLink, setActiveLink] = useState('dashboard');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const handleLinkClick = (componentName, linkName) => {
    setActiveComponent(componentName);
    setActiveLink(linkName);  
    setShowMenu(false); 
  };

  const handleEditPropertyClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent('editProperty'); // Switch to edit property component
    setActiveLink('editProperty');
  };

  const handleDetailsClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent('viewProperty'); // Switch to edit property component
    setActiveLink('viewProperty');
  };
  
  const handleDetailsInactiveListingClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent('viewPropertyInactive'); // Switch to edit property component
    setActiveLink('viewPropertyInactive');
  };
  
  const   handleCurrentPropertiesClick  = () => {
    setActiveComponent('currentProperties'); // Switch to edit property component
    setActiveLink('currentProperties');
  };
  

  // Function to toggle the 'show' class on the sidebar
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const handleUploadClick = () => {
    setActiveComponent('uploadProperty'); // Change to 'uploadProperty' when button is clicked
    setActiveLink('uploadProperty');
  };
  const handleUpdateSuccess = () => {
    setActiveComponent('currentProperties'); // Update the state to render the CurrentProperties component
  };
  

  return (
    <div className="shadow-lg rounded-lg">
      <Header />
      

      {/* Dashboard Content */}
      <div className="bg-gradient-to-b from-[#154D7C]/25 to-white py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-4xl lg:text-5xl leading-normal font-raleway font-bold text-[#000000]">
            Landlord Dashboard
          </h1>
          <p className="text-3xl text-[#154D7C] font-bold font-montserrat mt-8">
            Welcome back, {landlord.fullName}!
          </p>
          <p className="text-xl text-[#C64C7B] font-medium font-raleway mt-2">
            Maximize Your Reach, Minimize the Hassle.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={Image8}
            alt="Care Provider"
            className="w-1/2 sm:w-3/4 md:w-2/3 max-w-xl h-auto"
          />
        </div>
      </div>

      
    </div>


<div className='dashboardDynamicSection'>     

<SideNav showMenu={showMenu} toggleMenu={toggleMenu} onLinkClick={handleLinkClick} activeLink={activeLink} />
{activeComponent === 'dashboard' && <KeyStats onUploadClick={handleUploadClick} onCurrentPropertiesClick={handleCurrentPropertiesClick} />}
{activeComponent === 'profile' && <EditProfile />}
{activeComponent === 'matchmaker' && <SearchforCareProviders1 onViewDetailsClick={handleDetailsClick} />}
{activeComponent === 'uploadProperty' && <UploadPropertyForm onUpdateSuccess={handleUpdateSuccess} />}
{activeComponent === 'inactiveListings' && <InactiveListing onViewDetailsInactiveListingClick={handleDetailsInactiveListingClick} />}
{activeComponent === 'currentProperties' && (
        <CurrentProperties onEditClick={handleEditPropertyClick} onUploadClick={handleUploadClick} onViewDetailsClick={handleDetailsClick} />
      )}
      {activeComponent === 'editProperty' && <EditPropertyForm propertyId={selectedPropertyId} onUpdateSuccess={handleUpdateSuccess} />}
      {activeComponent === 'viewProperty' && <RequestedProperties propertyId={selectedPropertyId} />}
      {activeComponent === 'viewPropertyInactive' && <RequestedProperties propertyId={selectedPropertyId} />}
    </div>
    
      
      <Footer />
    </div>
  );
};

export default LandlordDashboard;
