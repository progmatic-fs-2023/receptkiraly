import React, { useState } from 'react';

function SearchFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleLabelSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedLabels(selectedOptions);
  };

  return (
    <div className="border-b border-b-light pb-6 lg:pb-10">
      <button
        type="button"
        className="button button--primary px-4 mr-4 text-xs"
        onClick={toggleFilter}
      >
        Filters
      </button>

      {isOpen && (
        <div className="mb-4 mt-6 lg:mt-10">
          <div className="flex flex-row">
            <div className="col mb-6 lg:mb-0 lg:w-1/4 mx-1">
              <label htmlFor="type" className="block mb-2 text-xs">
                Type
                <select
                  id="type"
                  className="bg-white border-2 border-black rounded w-full"
                  multiple
                  value={selectedLabels}
                  onChange={handleLabelSelection}
                >
                  <option value="meal">Meal</option>
                  <option value="dessert">Dessert</option>
                  <option value="beverage">Beverage</option>
                </select>
              </label>
            </div>
            <div className="col mb-6 lg:mb-0 lg:w-1/4">
              <label htmlFor="category" className="block mb-2 text-xs">
                Category
                <select
                  id="category"
                  className="bg-white border-2 border-black rounded w-full mx-1"
                  multiple
                  value={selectedLabels}
                  onChange={handleLabelSelection}
                >
                  <option value="appetizer">Appetizer</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;