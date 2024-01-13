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
    <div className="border-b border-b-light pb-6 lg:pb-10">
      <div className="flex items-center mb-4 p-4 lg:px-8 lg:py-5 w-full bg-orange-400">
        <input
          type="text"
          id="search"
          className="border-0 grow p-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleonKeyDown}
          placeholder="Search"
        />
        <Button text="Search" type="button" onClick={handleSearch} />
      </div>
      <div className="bg-white">
        <Button
          text="Filters"
          type="button"
          onClick={toggleFilter}
        />
        {isOpen && (
          <Button
            text="Apply Changes"
            type="button"
            addClassName="ml-2"
          />
        )}
        {isOpen && (
          <div className="mb-4 mt-6 lg:mt-10">
            <div className="flex flex-row">
              <div className="col mb-6 lg:mb-0 lg:w-1/4">
                <label htmlFor="mealType" className="block mb-2 text-xs">
                  Type
                  <select
                    id="mealType"
                    className="bg-white border-2 border-black rounded w-full py-1"
                  >
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
                  <select
                    id="mealType"
                    className="bg-white border-2 border-black rounded w-full py-1"
                  >
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
                  <input
                    type="text"
                    id="searchUser"
                    className="bg-white border-2 border-black rounded w-full py-1"
                    placeholder="Search by recipe owner"
                  />
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
