import React from "react";
import ReactDOM from "react-dom/client"; // Use "client"
import App from "./App";

// Get root element
const rootElement = document.getElementById("root");

// Ensure it's not null before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
