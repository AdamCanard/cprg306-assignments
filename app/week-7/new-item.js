"use client";

import { useState } from "react";

export function NewItem({ getter, setter }) {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = { name: name, quantity: quantity, category: category };

    setter([...getter, newItem]);
    setQuantity(0);
    setName("");
    setCategory("produce");
  };

  const increment = () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  const decrement = () => {
    let newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center ">
      <div className="h-2/3 w-1/2">
        <div
          id="window"
          className="flex flex-col w-full justify-center items-center"
        >
          <h1 id="title">New Item</h1>
          <div
            id="window-i-nb"
            className="flex flex-col justify-center items-center w-full"
          >
            <form className="flex flex-col gap-4">
              <div
                id="window-i-nb"
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div>
                  <label className="flex flex-row w-full">
                    Name:
                    <input
                      required
                      autoComplete="off"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex flex-row w-full justify-around">
                  <label className="flex flex-col">
                    Category:
                    <select
                      name="category"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="Produce">Produce</option>
                      <option value="Dairy">Dairy</option>
                      <option value="Bakery">Bakery</option>
                      <option value="Meat">Meat</option>
                      <option value="Frozen Foods">Frozen Foods</option>
                      <option value="Canned Goods">Canned Goods</option>
                      <option value="Dry Goods">Dry Goods</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Household">Household</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <div className="flex flex-row justify-around items-center w-12 h-12 text-center">
                    <div id="border">
                      <h1>{quantity}</h1>
                      <div className="flex flex-row gap-2 w-full">
                        <div
                          id="border"
                          className="w-4 h-6 leading-3 hover:cursor-pointer"
                          onClick={increment}
                        >
                          +
                        </div>

                        <div
                          id="border"
                          className="w-4 h-6 leading-3 hover:cursor-pointer"
                          onClick={decrement}
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="button-i">
                <button
                  type="submit"
                  id="button"
                  className="hover:cursor-pointer "
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
