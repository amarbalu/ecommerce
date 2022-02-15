import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "./routes";
import PrivateRoute from "./components/PrivateRoute";

const history = createBrowserHistory();
const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            {routes.map((props) =>
              props.path === "/cartpage" ? (
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
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default App;
