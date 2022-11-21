import React from "react";
import ReactDOM from "react-dom/client";
import { Dropdown } from "./lib";
import "./lib/Components/CSS/style.css";
import { states } from "./Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Dropdown label="State" arr={states} field="name" />
    </div>
  </React.StrictMode>
);
