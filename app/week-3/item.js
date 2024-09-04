export function Item({ item }) {
  return (
    <div id="border" className="w-full h-full text-sm">
      <h1 id="header">{item.name}</h1>
      <h2>Amount: {item.quantity}</h2>
      <h2>Category: {item.category}</h2>
    </div>
  );
}
