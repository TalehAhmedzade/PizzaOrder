import React from "react";
import "./styleCard.css";

const PizzaCard = ({src,name,detail,price,key}) => {
  
  return (
    <>
      <div className="card" id={key}>
        <div className="image">
          <img
            src={src}
            alt={key}
          />
        </div>
        <div className="info">
          <h2 className="pizza-name">{name}</h2>
          <p>{detail}</p>
          <p>{price}$</p>
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
