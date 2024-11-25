import React from "react";

const Pizza = ({ name, ingredient, photoName, price }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} style={{ borderRadius: "10px" }} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price} €</span>
      </div>
    </div>
  );
};

export default Pizza;
