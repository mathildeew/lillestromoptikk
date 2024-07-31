import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GetOpeningHours } from "./context/GetOpeninghours.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GetOpeningHours>
        <App />
      </GetOpeningHours>
    </BrowserRouter>
  </React.StrictMode>
);
