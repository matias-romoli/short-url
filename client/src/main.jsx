import { AppContextProvider } from "./hooks/context.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
