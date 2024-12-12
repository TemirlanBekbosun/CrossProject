import React from "react";
import "./SeoCard.css";
export default function SeoCard({ imgUrl, price, title }) {
  return (
    <div className="cardConteiner">
      <img src={imgUrl} alt="photo" />
      <p>{title}</p>
      <div className="priceContaoner">
        <h1 className="Pricetext">ЦЕНА:</h1>
        <span>{price}</span>
      </div>
    </div>
  );
}
