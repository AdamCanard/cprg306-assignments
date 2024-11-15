"use client";
import BasePage from "../basepage";
import { useState } from "react";

import { useUserAuth } from "./_utils/auth_context";
import { ItemList } from "./shopping-list/item-list";
import MealIdeas from "./shopping-list/meal-ideas";
import { NewItem } from "./shopping-list/new-item";
import Items from "./shopping-list/items.json";

export default function Page() {
  const [itemList, setItemList] = useState(Items);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(e) {
    setSelectedItemName(emojiRemover(e.name).split(",")[0]);
  }

  const emojiRemover = (string) => {
    return string.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "");
  };

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const SignIn = async () => {
    await gitHubSignIn();
  };

  const SignOut = async () => {
    await firebaseSignOut();
  };

  function Login({ children, user }) {
    return (
      <>
        {user ? (
          <>{children}</>
        ) : (
          <>
            <div onClick={SignIn}> Login</div>
          </>
        )}
      </>
    );
  }

  return (
    <BasePage>
      <Login user={user}>
        <div className="flex flex-row w-[90%] items-center justify-around">
          <ItemList items={itemList} onItemSelect={handleItemSelect} />
          <MealIdeas ingredient={selectedItemName} />
          <NewItem getter={itemList} setter={setItemList} />
        </div>
        <div onClick={SignOut}> Signout</div>
      </Login>
    </BasePage>
  );
}
