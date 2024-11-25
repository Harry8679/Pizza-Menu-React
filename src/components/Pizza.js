import React from "react";
import './Pizza.css';

const Pizza = ({ name, ingredient, photoName, price }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name}/>
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price} €</span>
      </div>
    </div>
  );
};

export default Pizza;
