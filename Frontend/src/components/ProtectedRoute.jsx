// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  // console.log("Token in ProtectedRoute:", token); // Debug log
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
