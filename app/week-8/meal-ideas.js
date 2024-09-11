"use client";
import { useEffect, useState } from "react";
import Meal from "./meal";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState({
    meals: [{ idMeal: "", strMeal: "", strMealThumb: "" }],
  });

  useEffect(() => {
    loadMeal(ingredient);
  }, [ingredient]);

  const loadMeal = async (ingredient) => {
    setMeals(await fetchMealIdeas(ingredient));
  };

  return (
    <div className="w-1/4">
      <div id="window" className="flex flex-col">
        <h1 id="title">Meals</h1>
        <div className="h-full">
          <div id="window-i-nb">
            <div className="w-full flex flex-col h-96 overflow-y-scroll">
              {Object.values(meals)[0].map((mealdata, index) => {
                return <Meal meal={mealdata} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function fetchMealIdeas(ingredient) {
  try {
    if (ingredient != "") {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();

      if (data.meals === null) {
        return { meals: [{ idMeal: "", strMeal: "", strMealThumb: "" }] };
      } else {
        return data;
      }
    } else {
      return { meals: [{ idMeal: "", strMeal: "", strMealThumb: "" }] };
    }
  } catch (error) {
    console.log(error);
  }
}
