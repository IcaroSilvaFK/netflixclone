import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { RoutesApplication } from "./routes/routes";
import "./styles/global.scss";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApplication />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
