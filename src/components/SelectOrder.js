import React, { useContext } from "react";
import { ApiContext } from "./ApiContext";

function SelectOrder({ onSort }) {
  const apiData = useContext(ApiContext);
  const data = apiData.read();

  const priceToNumber = (price) => {
    return parseFloat(price.slice(1));
  };

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "name-asc") {
      onSort(data.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (value === "name-desc") {
      onSort(data.sort((a, b) => b.name.localeCompare(a.name)));
    } else if (value === "price-asc") {
      onSort(data.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price)));
    } else if (value === "price-desc") {
      onSort(data.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price)));
    }
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSort} className="sort-button">
        <option value="">Select order</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}

export default SelectOrder;