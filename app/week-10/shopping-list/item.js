export function Item({ item, onSelect }) {
  return (
    <div
      className="w-full h-full"
      onClick={(e) => {
        onSelect(item);
      }}
    >
      <div id="border" className="w-full h-full text-sm">
        <h1 id="header">{item.name}</h1>
        <h2>Amount: {item.quantity}</h2>
        <h2>Category: {item.category}</h2>
      </div>
    </div>
  );
}
