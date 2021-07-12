import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

export default function Pictures() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
  );
}