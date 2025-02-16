// React -%- ////
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";

// Packages -%- ////
import { Web3Provider } from "./components/Web3Provider";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";

// Types -%- ////

// Components -%- ////
import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";

// Middleware & Integrations -%- ////
import { store } from "./redux/store";

// Application -%- ////
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3Provider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <App>
                  <HomePage />
                </App>
              }
            />
            <Route
              path="/privacy"
              element={
                <App>
                  <PrivacyPage />
                </App>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Web3Provider>
  </React.StrictMode>
);
