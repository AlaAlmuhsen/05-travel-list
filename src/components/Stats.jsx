import React from "react";

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start Adding some items to your packing list</p>
    );
  }

  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = ((numOfPacked / numOfItems) * 100).toFixed(2) || 0;

  return (
    <footer className="stats">
      <em>{`You have ${numOfItems} items in your list, and you already packed ${numOfPacked} (${percentage}%)`}</em>
    </footer>
  );
}

export default Stats;
