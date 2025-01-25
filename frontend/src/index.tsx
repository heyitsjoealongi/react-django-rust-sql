// React -%- ////
import React from "react";
import ReactDOM from "react-dom/client";

// Packages -%- ////
import { Provider } from "react-redux";

// Types -%- ////

// System Components -%- ////
import App from "./App";
import "./input.css";

// Components -%- ////
// import reportWebVitals from "./reportWebVitals";

// Middleware & Integrations -%- ////
import { store } from "./redux/store";

// Application -%- ////
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
