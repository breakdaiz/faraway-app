import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handledAddItems = item => {
    setItems(items => [...items, item]);
  };

  const handleDeleteItems = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleClearItems = () => {
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) setItems([]);
  };

  const handleToggleItem = id => {
    console.log("handleToggleItem");
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className='app'>
      <Logo />
      <Form handledAddItems={handledAddItems} />
      <PackingList
        handleToggleItem={handleToggleItem}
        handleDeleteItems={handleDeleteItems}
        handleClearItems={handleClearItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
