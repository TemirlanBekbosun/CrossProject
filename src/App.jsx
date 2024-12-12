import React from "react";
import "./App.css";
import SeoCard from "./components/SeoCard";
import { products } from "./utils/constants.jsx";
import Imageone from "./assets/image1.jpg";

export default function App() {
  return (
    <div className="Crossmain">
      <h1>Все кроссовки</h1>
      <div className="Crosconteiner">
        {products.map((item) => (
          <SeoCard
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}
