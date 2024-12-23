import React, { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import RegistrationCareProvider from './components/RegisterCareProvider';
import RegistrationAgent from './components/RegisterAgent';
import RegistrationLandlord from './components/RegistrationLandlord';
import LoginForm from './components/LoginForm';
import CurrentProperties from './components/LandLordDasboard/CurrentProperties';
import UploadPropertyForm from './components/LandLordDasboard/UploadPropertyForm';
import RegistrationAgentsofCareProviders from './components/RegistrationAgentsofCareProviders';
import Services from './pages/Services';
import LandlordDashboard from './components/LandLordDasboard/LandlordDashboard';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { checkUserToken } from './Redux/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CareProviderDashBoard from './components/CareProviderDashBoard/CareProviderDashBoard';
import AgentDashboard from './components/AgentDashboard/AgentDashboard';
import AgentforCareProvider from './components/AgentforCareProvider/AgentforCareProvider';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserToken());
  }, [dispatch]);
  return (
    <div className="max-w-[2560px] mx-auto bg-white">
  <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
     {/*    <Route path="/property/:id" element={<PropertyDetails />} /> */}
        <Route path="/Services" element={<Services />} />
        <Route path="/register-care-provider" element={<RegistrationCareProvider />} />
        <Route path="/register-agents-care-provider" element={<RegistrationAgentsofCareProviders />} />
        <Route path="/register-agent" element={<RegistrationAgent />} />
        <Route path="/register-landlord" element={<RegistrationLandlord />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/currentProperties" element={<CurrentProperties />} />
        <Route path="/uploadpropertyform" element={<UploadPropertyForm />} />
      

        <Route 
  path="/LandlordDashboard" 
  element={<PrivateRoute element={<LandlordDashboard />} role="isAuthenticatedLandlord" />} 
/>

<Route 
  path="/careproviderdashboard" 
  element={<PrivateRoute element={<CareProviderDashBoard />} role="isAuthenticatedCareProvider" />} 
/>

        <Route path="/agentdashboard" element={<AgentDashboard />} />
           <Route path="/agent-careprovider-dashboard" element={<AgentforCareProvider />} />
                
       
      </Routes>
    
    </div>
  );
};

export default App;
