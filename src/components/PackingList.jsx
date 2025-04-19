import React from "react";
import Item from "./Item";

function PackingList({ items }) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option>s b i o</option>
          <option>s b d</option>
          <option>s b p s </option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
