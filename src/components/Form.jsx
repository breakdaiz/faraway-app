import React from "react";

const Form = () => {
  const handledSubmit = e => {
    e.preventDefault();

    console.log("SUBMITT!");
  };

  return (
    <form className='add-form' onSubmit={handledSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type='text' placeholder='item...' />
      <button>Add</button>
    </form>
  );
};

export default Form;
