import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/global.scss";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
