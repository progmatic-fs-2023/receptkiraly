import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
    <div className="border-b border-gray-200 pb-6 lg:pb-10 relative z-10">
      <div className="bg-orange-400 mb-4 p-4 lg:px-8 lg:py-5 custom-div-shadow relative z-0">
      <div>
        <img
          src="/images/meal-2.svg"
          alt="Meal Icon"
          className="absolute left-0 top-0 h-40 transform scale-x-[-1] z-0"
        />
        <img src="/images/top-orange.svg" alt="Meal Icon" className="absolute right-0 top-0 z-0" />
        <h1 className="relative py-8 text-5xl text-white z-20">Search</h1>
      </div>
      <div className="flex flex-row flex-nowrap  relative z-20">
        <input
          type="text"
          id="search"
          className="border-2 border-gray-300 focus:outline-none py-3 px-4 rounded-md w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleonKeyDown}
          placeholder="Search"
        />
        <Button text="Search" type="button" onClick={handleSearch} />
      </div>
      </div>
      <div>
        <Button
          text="Filters"
          type="button"
          onClick={toggleFilter}
          addClassName="transition-none"
        />
        {isOpen && (
          <div id="filterContainer">
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
              <Button
            text="Apply Changes"
            type="button"
            addClassName="ml-2"
          />
            </div>
            </div>
        )}
      </div>
    </div>
  );  
}

export default SearchFilter;
