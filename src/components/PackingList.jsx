import React, { useState } from "react";

const PackingList = ({ items, handleDeleteItems, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  const handleSortBy = e => {
    const selectedOption = e.target.value;
    setSortBy(selectedOption);
  };

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            <input
              type='checkbox'
              checked={item.packed}
              onChange={() => handleToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItems(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className='actions'>
        <select
          onChange={e => {
            handleSortBy(e);
          }}
          value={sortBy}
        >
          <option value='input'> Sort by input order</option>
          <option value='description'> Sort by description</option>
          <option value='packed'> Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
