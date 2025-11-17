import React from 'react';
import { isAuthenticated } from '../utils/auth';
import Login from './Login';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Login />;
  }
  return children;
};

export default ProtectedRoute;