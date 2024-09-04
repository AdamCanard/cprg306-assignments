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
        className="flex flex-row justify-between items-center w-24 h-12"
      >
        <h1>{quantity}</h1>
        <div>
          <button id="border-s-np" className="w-4 h-10" onClick={increment}>
            +
          </button>
          <button id="border-s-np" className="w-4 h-10" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
