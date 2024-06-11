import React from "react";

export function priceToNumber(price) {
  return parseFloat(price.slice(1));
}

export function handleSort(e, onSort, data) {
  const value = e.target.value;
  let sortedData = [...data];
  if (value === "name-asc") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === "name-desc") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (value === "price-asc") {
    sortedData.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
  } else if (value === "price-desc") {
    sortedData.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
  }
  onSort(sortedData);
}

function SelectOrder({ onSort, data }) {
  const handleSortChange = (e) => {
    handleSort(e, onSort, data);
  };

  return (
    <div className="sort-container">
      <select id="sort" onChange={handleSortChange} className="sort-button">
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
