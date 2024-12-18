import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';

import CareProviderDashBoard from './CareProviderDashBoard/CareProviderDashBoard';
import AgentDashboard from './AgentDashboard/AgentDashboard';
import AgentforCareProvider from './AgentforCareProvider/AgentforCareProvider';


  const DashboardRoutes = () => {
    return (
      <>
       
        <Routes>
          <Route path="/careproviderdashboard" element={<CareProviderDashBoard />} />
          <Route path="/agentdashboard" element={<AgentDashboard />} />
          <Route path="/agent-careprovider-dashboard" element={<AgentforCareProvider />} />
       
        </Routes>
      </>
    );
  };
  

  export default DashboardRoutes ;
  