export default function Meal({ meal }) {
  return (
    <div id="border" className="w-full text-sm">
      <h1 id="header">{meal.strMeal}</h1>
    </div>
  );
}
