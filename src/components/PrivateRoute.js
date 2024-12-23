import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, role, ...rest }) => {
  
  const isAuthenticated = useSelector((state) => state.auth[role]);
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
