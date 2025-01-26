// React -%- ////
import React from "react";
import ReactDOM from "react-dom/client";

// Packages -%- ////
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";

// Types -%- ////

// System Components -%- ////
import App from "./App";
import "./input.css";

// Components -%- ////
import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import ResumePage from "./pages/Resume";
import SignupPage from "./pages/Signup";
import LogonPage from "./pages/Logon";
import AccountPage from "./pages/Account";

// Middleware & Integrations -%- ////
import { store } from "./redux/store";

// Application -%- ////
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
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
          <Route
            path="/resume"
            element={
              <App>
                <ResumePage />
              </App>
            }
          />
          <Route
            path="/signup"
            element={
              <App>
                <SignupPage />
              </App>
            }
          />
          <Route
            path="/logon"
            element={
              <App>
                <LogonPage />
              </App>
            }
          />
          <Route
            path="/account"
            element={
              <App>
                <AccountPage />
              </App>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
