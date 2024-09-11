"use client";
import BasePage from "../basepage";
import { ItemList } from "./item-list";
import { NewItem } from "./new-item";
import Items from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [itemList, setItemList] = useState(Items);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(e) {
    setSelectedItemName(emojiRemover(e.name).split(",")[0]);
  }

  const emojiRemover = (string) => {
    return string.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "");
  };

  return (
    <BasePage>
      <div className="flex flex-row w-[90%] items-center justify-around">
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
        <NewItem getter={itemList} setter={setItemList} />
      </div>
    </BasePage>
  );
}
