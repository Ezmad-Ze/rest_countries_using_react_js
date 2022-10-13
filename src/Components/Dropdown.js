import React from "react";

const Dropdown = () => {
  const [value, setValue] = React.useState("Filter by Region");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        What do we eat?
        <select value={value} onChange={handleChange}>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </label>

      <p>We eat {value}!</p>
    </div>
  );
};

export default Dropdown;
