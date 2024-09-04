export function Item({ item }) {
  return (
    <div id="border" className="w-full h-full">
      <h1>{item.name}</h1>
      <h1>{item.quantity}</h1>
      <h1>{item.category}</h1>
    </div>
  );
}
