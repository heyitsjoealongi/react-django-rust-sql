// React -%- ////
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Packages -%- ////
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";

// Components -%- ////
import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";

// Middleware & Integrations -%- ////
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
