import React, { useState } from "react";

import Data from "../assets/Data/Data.json";

const FilterButton = ({ menuItems, filterItems, setItem }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleCheckboxChange = (item) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(item)) {
      newSelectedItems.delete(item);
    } else {
      newSelectedItems.add(item);
    }
    setSelectedItems(newSelectedItems);
    applyFilters(newSelectedItems);
  };
  const applyFilters = (selectedItems) => {
    if (selectedItems.size === 0 || selectedItems.has("All")) {
      setItem(Data);
    } else {
      const newItems = Data.filter((newVal) =>
        selectedItems.has(newVal.category),
      );
      setItem(newItems);
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        style={{ width: "125px" }}
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {menuItems.map((val, id) => (
          <li key={id} className="dropdown-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`filter-${val}`}
                onChange={() => handleCheckboxChange(val)}
              />
              <label className="form-check-label" htmlFor={`filter-${val}`}>
                {val}
              </label>
            </div>
          </li>
        ))}
        <li className="dropdown-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="filter-all"
              onChange={() => handleCheckboxChange("All")}
            />
            <label className="form-check-label" htmlFor="filter-all">
              All
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterButton;
