import React, { useState } from 'react';

function SearchFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="button button--primary px-4 mr-4 text-xs"
        onClick={toggleFilter}
      >
        Apply Filters
      </button>

      {isOpen && (
        <div className="mb-4 mt-6 lg:mt-10">
          <div className="lg:row">
            <div className="col mb-6 lg:mb-0 lg:w-1/4">
              <label htmlFor="course" className="block mb-2 text-xs">
                Type
                <select id="course" className="bg-white border-0 rounded w-full">
                  <option>All</option>
                  <option value="meal">Meal</option>
                  <option value="dessert">Dessert</option>
                  <option value="beverage">Beverage</option>
                </select>
              </label>
            </div>
            <div className="col mb-6 lg:mb-0 lg:w-1/4">
              <label htmlFor="mealType" className="block mb-2 text-xs">
                Category
                <select id="mealType" className="bg-white border-0 rounded w-full">
                  <option>All</option>
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