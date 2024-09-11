export function Item({ item }) {
  return (
    <div id="window" className="w-full h-full text-sm">
      <h1 id="title">{item.name}</h1>
      <div id="border">Amount: {item.quantity}</div>
      <div id="border">Category: {item.category}</div>
    </div>
  );
}
