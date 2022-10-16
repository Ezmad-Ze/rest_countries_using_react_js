import React from "react";

const Dropdown = ({ regionFilter }) => {
  const handleChange = (event) => {
    regionFilter(event.target.value);
  };

  return (
    <div>
      <select
        name="list"
        placeholder="Filter by Region"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Dropdown;
