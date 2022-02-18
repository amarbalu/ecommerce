import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) =>
  rest.email ? children : <Navigate to="/homepage" replace />;

export default PrivateRoute;
