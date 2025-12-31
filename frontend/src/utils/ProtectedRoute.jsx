import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.auth.currentUser);
    const location = useLocation();
  
    if (!currentUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;
  