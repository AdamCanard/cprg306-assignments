"use client";

import { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  const decrement = () => {
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div
        id="header"
        className="flex flex-row justify-around items-center w-24 h-12 text-center"
      >
        <div className="w-full">
          <h1>{quantity}</h1>
        </div>
        <div className="flex flex-row gap-2 w-full">
          <div
            id="border-s-np"
            className="w-4 h-6 leading-5"
            onClick={increment}
          >
            +
          </div>

          <div
            id="border-s-np"
            className="w-4 h-6 leading-5"
            onClick={decrement}
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}
