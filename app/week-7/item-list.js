"use client";
import { useState } from "react";
import { Item } from "./item";
import Items from "./items.json";

export function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  console.log(items);
  return (
    <>
      <div id="window" className="flex flex-col">
        <h1 id="title">Shopping List</h1>
        <div id="window-i-nb">
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 grid-flow-row">
            {items
              .sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                  return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => {
                return <Item item={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
