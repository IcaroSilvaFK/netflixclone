import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { RoutesApplication } from "./routes/routes";
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApplication />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
