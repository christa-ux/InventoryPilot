
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <App />
      </div>  
    </NextUIProvider>
  </React.StrictMode>
);