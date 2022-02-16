import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { reducer, initialState } from "./reducer";
import rootSaga from "./saga";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./components/ProductCard/Context";

const saga = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(saga));
saga.run(rootSaga);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ProductProvider>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
