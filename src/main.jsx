import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CanteenProvider } from "./context/CanteenContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CanteenProvider>
        <App />
      </CanteenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
