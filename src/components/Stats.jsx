import React from "react";

const Stats = ({ items }) => {
  // items.filter(item => item.id !== id));
  const numItems = items.length;
  // item => item.id !== id
  return (
    <footer>
      <em>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {(
          (items.filter(item => item.packed === true).length / numItems) *
          100
        ).toFixed(2)}
        (X%)
      </em>
    </footer>
  );
};

export default Stats;
