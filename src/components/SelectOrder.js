import React, { useContext } from "react";
import { ApiContext } from "./ApiContext";

function SelectOrder({ onSort }) {
  const apiData = useContext(ApiContext);
  const data = apiData.read();

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "name-asc") {
      onSort(data.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (value === "name-desc") {
      onSort(data.sort((a, b) => b.name.localeCompare(a.name)));
    }
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSort}>
        <option value="">Select order</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
}

export default SelectOrder;