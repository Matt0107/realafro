import React from "react";
import "./styles/App.css";
const App = () => (
  <div className="app-container">
    <img
      className="centered-image"
      src={require("./assets/Afrotennis_logos_Afrotennis_blason_logo_black.jpg")}
      alt="Image d'accueil"
    />
    <p className="coming-soon-text">Coming Soon</p>
  </div>
);

export default App;
