import React from "react";
import './Footer.css';

const Footer = () => {
  const hour = new Date().getHours(); // Récupère l'heure actuelle
  const openHour = 12; // Heure d'ouverture
  const closeHour = 22; // Heure de fermeture
  const isOpen = hour >= openHour && hour <= closeHour;

  // Logs pour debug
  console.log("Current hour:", hour);
  console.log("Open hour:", openHour);
  console.log("Close hour:", closeHour);
  console.log("Is open:", isOpen);

  return (
    <footer className="footer" style={{ color: "black", fontSize: "16px" }}>
      <p>
        {isOpen
          ? `${new Date().toLocaleTimeString()} We're currently open`
          : "Sorry, we're closed"}
      </p>
    </footer>
  );
};

export default Footer;
