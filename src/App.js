import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Container = styled("div")`
  &.app-container {
    position: relative;
    top: 30px;
  }
`;

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Container className="app-container">
            <Routes>
              {routes.map((props) =>
                props.path === "/checkout" ? (
                  <Route
                    path={props.path}
                    element={<PrivateRoute>{props.component}</PrivateRoute>}
                  />
                ) : (
                  <Route path={props.path} element={props.component} />
                )
              )}
              <Route path="*" element={<Navigate to="/homepage" replace />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default App;
