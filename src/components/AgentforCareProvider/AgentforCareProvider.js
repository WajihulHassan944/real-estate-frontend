import React, { useState} from "react";
import Footer from "../Footer";
import Header from "../Header";
import Image7 from "../../assets/images/image7.png";
import EditProfile1 from "./EditProfile1";
import SideNavbar from "./SideNavbar";
import KeyStats1 from "./KeyStats1";
import { useSelector } from "react-redux";
import SavedProperties from "./SavedProperties";
import LeasedProperties from "./LeasedProperties";
import ManageClients from "./ManageClients";
import DashboardMatchmaker from "../LandLordDasboard/DashboardMatchmaker";
const AgentforCareProvider = () => {
  const agentLandlord = useSelector((state) => state.agentLandlord); 
console.log(agentLandlord);
  const [showMenu, setShowMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [activeLink, setActiveLink] = useState("dashboard");
  const handleLinkClick = (componentName, linkName) => {
    setActiveComponent(componentName);
    setActiveLink(linkName);
    setShowMenu(false);
  };

  const handleCurrentPropertiesClick = () => {
    setActiveComponent("currentProperties"); // Switch to edit property component
    setActiveLink("currentProperties");
  };

  // Function to toggle the 'show' class on the sidebar
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleUploadClick = () => {
    setActiveComponent("uploadProperty"); // Change to 'uploadProperty' when button is clicked
    setActiveLink("uploadProperty");
  };

  return (
    <div>
      <Header />

      {/* Header */}
      <div className="bg-gradient-to-b from-[#154D7C]/25 to-white py-10" style={{padding:'80px 0'}}>
        {/* Dashboard View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center mb-8">
          <div className="text-center">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl leading-normal font-raleway font-bold text-[#000000]" style={{lineHeight:'1.3'}}>
                Care Provider Agent <br />Dashboard
              </h1>
            </div>
            <p className="text-3xl text-[#154D7C] font-bold font-montserrat mt-8">
              Welcome back, Anna!
            </p>
            <p className="text-xl text-[#C64C7B] font-medium font-raleway mt-2" style={{fontWeight:"800"}}>
            Your Hub for Care-Driven Property Solutions.
            </p>
          </div>
          <div className="flex justify-center">
          <img
  src={Image7}
  alt="Care Provider"
  className="w-full sm:w-5/6 md:w-3/4 max-w-2xl h-auto"
/>

          </div>
        </div>
      </div>
      <div className="dashboardDynamicSection">
        <SideNavbar
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          onLinkClick={handleLinkClick}
          activeLink={activeLink}
        />
        {activeComponent === "dashboard" && (
          <KeyStats1
            onUploadClick={handleUploadClick}
            onCurrentPropertiesClick={handleCurrentPropertiesClick}
          /> 
        )}
        {activeComponent === "profile1" && <EditProfile1 />}
        {activeComponent === "searchProperties" && <DashboardMatchmaker />}
        {activeComponent === "manageClients" && <ManageClients />}
    
{activeComponent === 'savedProperties' && <SavedProperties />}
{activeComponent === 'leasedProperties' && <LeasedProperties />}

      </div>
      <Footer />
    </div>
  );
};

export default AgentforCareProvider;
