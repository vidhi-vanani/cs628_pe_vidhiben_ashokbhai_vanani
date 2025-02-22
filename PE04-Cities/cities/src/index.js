import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

// Get the root element from the HTML file where the React app will be mounted
const root = createRoot(document.getElementById("root"));

// Render the App component inside React's StrictMode for better debugging and warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
