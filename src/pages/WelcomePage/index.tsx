import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 2000);
  }, []);

  return (
    <div className="containerWelcome">
      <div className="Logo">
        <div className="FirstCaracter"></div>
        <div className="SecondCaracter"></div>
        <div className="TherdCaracter"></div>
      </div>
    </div>
  );
}
