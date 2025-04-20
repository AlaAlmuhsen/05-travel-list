import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Apple", quantity: 3, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(item) {
    // setItems((items) => items.push(item));\
    setItems((items) => [...items, item]);
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
