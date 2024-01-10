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
      <div className="flex items-center mb-4 p-4 lg:px-8 lg:py-5 w-full bg-blue-500">
        <input type="text" id="search" className="border-0 grow p-3" placeholder="Search" />
      </div>
      <div className="bg-white">
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        onClick={toggleFilter}
      >
        Filters
      </button>
      {isOpen && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ml-2"
          >
            Apply Changes
          </button>
        )}
      {isOpen && (
        <div className="mb-4 mt-6 lg:mt-10">
          <div className="flex flex-row">
            <div className="col mb-6 lg:mb-0 lg:w-1/4">
              <label htmlFor="mealType" className="block mb-2 text-xs">
                Type
                <select id="mealType" className="bg-white border-2 border-black rounded w-full py-1">
                  <option>All</option>
                  <option value="meal">Meal</option>
                  <option value="dessert">Dessert</option>
                  <option value="beverage">Beverage</option>
                </select>
              </label>
            </div>
            <div className="col mb-6 lg:mb-0 lg:w-1/4 mx-2">
              <label htmlFor="mealType" className="block mb-2 text-xs">
                Category
                <select id="mealType" className="bg-white border-2 border-black rounded w-full py-1">
                  <option>All</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </label>
            </div>
            <div className="col mb-6 lg:mb-0 lg:w-1/4 mx-2">
              <label htmlFor="label" className="block mb-2 text-xs">
                Labels
                <select
                  id="label"
                  className="bg-white border-2 border-black rounded w-full"
                  multiple
                  value={selectedLabels}
                  onChange={handleLabelSelection}
                >
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="gluten-free">Gluten-free</option>
                  <option value="low-carb">Low-carb</option>
                  <option value="spicy">Spicy</option>
                </select>
              </label>
            </div>
            <div className="col mb-6 lg:mb-0 lg:w-1/4 mx-2">
              <label htmlFor="searchUser" className="block mb-2 text-xs">
                Username
                <input type="text" id="searchUser" className="bg-white border-2 border-black rounded w-full py-1" placeholder="Search by recipe owner" />
              </label>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default SearchFilter;