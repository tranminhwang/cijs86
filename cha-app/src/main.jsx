import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FirebaseProvider from "./context/FirebaseProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
