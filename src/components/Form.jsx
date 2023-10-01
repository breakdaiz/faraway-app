import React, { useState } from "react";

const Form = ({ handledAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  const handledSubmit = e => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    handledAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className='add-form' onSubmit={handledSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type='text'
        onChange={e => setDescription(e.target.value)}
        placeholder='item...'
        value={description}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
