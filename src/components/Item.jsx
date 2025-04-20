import React from "react";

function Item({ item, onToggleItems, onDeleteItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌️</button>
    </li>
  );
}

export default Item;
