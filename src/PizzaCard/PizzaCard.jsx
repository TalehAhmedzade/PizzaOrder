import React from "react";
import "./styleCard.css";

const PizzaCard = ({ src, name, detail, price, action}) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={src} alt="PizaPhoto" />
        </div>
        <div className="info">
          <h2 className="pizza-name">{name}</h2>
          <p>{detail}</p>
          <p>{price}$</p>
          <button onClick={()=>action(prev => [...prev, {name, price}])}>Order</button>
        </div>
      </div>
    </>
  );
};
export default PizzaCard;
