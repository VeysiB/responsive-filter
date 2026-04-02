import React, { useState } from "react";

// import Data from "../assets/Data/Data.json";

const FilterModal = ({ menuItems, filterItems, setItem, Data }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleCheckboxChange = (item) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(item)) {
      newSelectedItems.delete(item);
    } else {
      newSelectedItems.add(item);
    }
    setSelectedItems(newSelectedItems);
  };

  const applyFilters = () => {
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
    <div
      className="modal fade"
      id="filterModal"
      tabIndex="-1"
      aria-labelledby="filterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="filterModalLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {menuItems.map((val, id) => (
              <div key={id} className="form-check">
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
            ))}
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              onClick={applyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
