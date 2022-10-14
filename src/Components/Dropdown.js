import React from "react";

const Dropdown = () => {
  const [value, setValue] = React.useState("Filter by Region");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <select
          name="list"
          placeholder="search for region"
          onChange={handleChange}
        >
          <option value="all">all</option>
          <option value="africa">africa</option>
          <option value="europe">europe</option>
        </select>

    </div>
  );
};

export default Dropdown;
