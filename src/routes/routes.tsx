import { Route, Routes } from "react-router-dom";

import { WelcomePage } from "../pages/WelcomePage";
import { Home } from "../pages/Home";

export function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
