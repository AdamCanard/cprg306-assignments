"use client";
import BasePage from "../basepage";
import { ItemList } from "./item-list";
import { NewItem } from "./new-item";
import Items from "./items.json";
import { useState } from "react";

export default function Page() {
  const [itemList, setItemList] = useState(Items);
  return (
    <BasePage>
      <div className="flex flex-row w-[90%] items-center">
        <ItemList items={itemList} />
        <NewItem getter={itemList} setter={setItemList} />
      </div>
    </BasePage>
  );
}
