import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
// import UploadPropertyForm from './UploadPropertyForm';
import Image9 from "../../assets/images/image9.png";
import { Link } from "react-router-dom";
import CurrentProperties from "../LandLordDasboard/CurrentProperties";
import EditProfile1 from "./EditProfile1";
import SideNavbar from "./SideNavbar";
import KeyStats1 from "./KeyStats1";
import InactiveListing1 from "./InactiveListing1";
import SearchforCareProviders1 from "../LandLordDasboard/SearchforCareProviders1";
import RequestedProperties from "../LandLordDasboard/RequestedProperties";
import UploadPropertyForm from "../LandLordDasboard/UploadPropertyForm";
import EditPropertyForm from "../LandLordDasboard/EditProperty/EditPropertyForm";
import { useSelector } from "react-redux";
import ManageLandlords from "./ManageLandlords";
import RequestReceived from "./RequestReceived";

const AgentDashboard = () => {
  const agentLandlord = useSelector((state) => state.agentLandlord); 
console.log(agentLandlord);
  const [showMenu, setShowMenu] = useState(false);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [activeLink, setActiveLink] = useState("dashboard");
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const handleLinkClick = (componentName, linkName) => {
    setActiveComponent(componentName);
    setActiveLink(linkName);
    setShowMenu(false);
  };

  const handleEditPropertyClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent("editProperty"); // Switch to edit property component
    setActiveLink("editProperty");
  };

  const handleDetailsClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent("viewProperty"); // Switch to edit property component
    setActiveLink("viewProperty");
  };

  const handleDetailsInactiveListingClick = (id) => {
    setSelectedPropertyId(id); // Store the selected property ID
    setActiveComponent("viewPropertyInactive"); // Switch to edit property component
    setActiveLink("viewPropertyInactive");
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
      <div className="bg-gradient-to-b from-[#154D7C]/25 to-white py-10">
        {/* Dashboard View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center mb-8">
          <div className="text-center">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl leading-normal font-raleway font-bold text-[#000000]">
                Agent Dashboard
              </h1>
            </div>
            <p className="text-3xl text-[#154D7C] font-bold font-montserrat mt-8">
              Welcome back, Anna!
            </p>
            <p className="text-xl text-[#C64C7B] font-medium font-raleway mt-2">
              List, Manage, Connect – All in One Place.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Image9}
              alt="Care Provider"
              className="w-1/2 sm:w-3/4 md:w-2/3 max-w-xl h-auto"
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
        {activeComponent === "matchmaker" && <SearchforCareProviders1 />}
        {activeComponent === "uploadProperty" && <UploadPropertyForm />}
        {activeComponent === "managelandlord" && <ManageLandlords />}
        {activeComponent === "requestreceived" && <RequestReceived />}
        {activeComponent === "inactiveListings1" && (
          <InactiveListing1
           />
        )}
        {activeComponent === "currentProperties" && (
          <CurrentProperties
            onEditClick={handleEditPropertyClick}
            onUploadClick={handleUploadClick}
            onViewDetailsClick={handleDetailsClick}
          />
        )}
        {activeComponent === "editProperty" && (
          <EditPropertyForm propertyId={selectedPropertyId} />
        )}
        {activeComponent === "viewProperty" && (
          <RequestedProperties propertyId={selectedPropertyId} />
        )}
        {activeComponent === "viewPropertyInactive" && (
          <RequestedProperties propertyId={selectedPropertyId} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AgentDashboard;
