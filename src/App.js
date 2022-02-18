import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Login from "./containers/Login";
import { useDispatch, useSelector } from "react-redux";

const Container = styled("div")`
  &.app-container {
    position: relative;
    top: 82px;
  }
`;

const App = () => {
  const email = useSelector((state) => state.email);
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Container className="app-container">
            <Routes>
              {routes.map((props) =>
                props.path === "/checkoutdsd" ? (
                  <Route
                    path={props.path}
                    element={
                      <PrivateRoute email={email}>
                        {props.component}
                      </PrivateRoute>
                    }
                  />
                ) : (
                  <Route path={props.path} element={props.component} />
                )
              )}
              <Route path="*" element={<Navigate to="/homepage" replace />} />
            </Routes>
          </Container>
          <Login />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default App;
