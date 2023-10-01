import React from "react";

const PackingList = ({ items, handleDeleteItems, handleToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
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
    </div>
  );
};

export default PackingList;
