import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticatedLandlord } = useSelector((state) => state.auth);
  
  return isAuthenticatedLandlord ? element : <Navigate to="/" />;
};

export default PrivateRoute;
