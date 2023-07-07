import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Routes } from "react-router-dom";
import router from "./data/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Routes>
      <RouterProvider router={router} />
    </Routes>
  </React.StrictMode>
);
