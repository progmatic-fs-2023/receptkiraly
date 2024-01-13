import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleLabelSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedLabels(selectedOptions);
  };

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchText)}`);
  };

  const handleonKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="border-b border-gray-200 pb-6 lg:pb-10">
      <div className="flex items-center mb-4 p-4 lg:px-8 lg:py-5 w-full bg-blue-500 text-white">
        <input
          type="text"
          id="search"
          className="border-2 border-gray-300 focus:outline-none py-2 px-4 rounded-md w-full relative z-20"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleonKeyDown}
          placeholder="Search"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 ml-2 rounded-md focus:outline-none relative z-20"
        >
          Search
        </button>
      </div>
      <div className="bg-white">
        <button
          type="button"
          className="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none"
          onClick={toggleFilter}
        >
          Filters
        </button>
        {isOpen && (
          <>
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none ml-2"
            >
              Apply Changes
            </button>
            <div className="mb-4 mt-6 lg:mt-10">
              <div className="flex flex-nowrap">
                <div className="mb-6 lg:mb-0 lg:w-1/4 lg:mr-2">
                  <label htmlFor="mealType" className="block mb-2 text-sm">
                    Type
                    <select
                      id="mealType"
                      className="bg-white border-2 border-gray-300 rounded w-full py-2"
                    >
                      <option>All</option>
                      <option value="meal">Meal</option>
                      <option value="dessert">Dessert</option>
                      <option value="beverage">Beverage</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6 lg:mb-0 lg:w-1/4 lg:mx-2">
                  <label htmlFor="category" className="block mb-2 text-sm">
                    Category
                    <select
                      id="category"
                      className="bg-white border-2 border-gray-300 rounded w-full py-2"
                    >
                      <option>All</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6 lg:mb-0 lg:w-1/4 lg:mx-2">
                  <label htmlFor="label" className="block mb-2 text-sm">
                    Labels
                    <select
                      id="label"
                      className="bg-white border-2 border-gray-300 rounded w-full"
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
                <div className="mb-6 lg:mb-0 lg:w-1/4 lg:mx-2">
                  <label htmlFor="searchUser" className="block mb-2 text-sm">
                    Username
                    <input
                      type="text"
                      id="searchUser"
                      className="bg-white border-2 border-gray-300 rounded w-full py-2 px-4"
                      placeholder="Search by recipe owner"
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );  
}

export default SearchFilter;