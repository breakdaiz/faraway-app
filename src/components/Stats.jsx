import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  return (
    <footer className='stats'>
      <em>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({((numPacked / numItems) * 100).toFixed(0)}
        %)
      </em>
    </footer>
  );
};

export default Stats;
