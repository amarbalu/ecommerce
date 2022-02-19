import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) =>
  rest.email ? children : <Navigate to="/cart" replace />;

export default PrivateRoute;
