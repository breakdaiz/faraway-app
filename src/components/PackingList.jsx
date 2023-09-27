import React from "react";

const PackingList = ({ initialItems }) => {
  return (
    <div className='list'>
      <ul>
        {initialItems.map(item => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
