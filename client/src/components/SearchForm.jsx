import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { meals, desserts, beverages, labels } from './navigation/NavArrays';
import { API_URL } from '../constants';

import Button from './Button';

function SearchFilter({ setRecipesData, setErrorMessage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Search from the text input.
  const [searchText, setSearchText] = useState('');

  // Selected searching filters
  const [, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const navigate = useNavigate();

  const getCategoriesForType = () => {
    switch (selectedType) {
      case 'meals':
        return meals;
      case 'desserts':
        return desserts;
      case 'beverages':
        return beverages;
      case '':
        return [...meals, ...desserts, ...beverages];
      default:
        return [];
    }
  };
  // Set the filter selects to be able to select all option.
  const allCategories = [{ key: '0', value: '', label: 'All' }, ...getCategoriesForType()];
  const allLabels = [{ key: '0', value: '', label: 'All' }, ...labels];

  const handleLabelSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedLabels(selectedOptions);
  };

  // Set the searching parameters with URL. Handle search buttons.
  const handleSearch = () => {
    navigate(`/search?title=${encodeURIComponent(searchText)}`);

    setSearchParams({
      title: searchText,
      username: selectedUser,
      type: selectedType,
      category: selectedCategory,
      labels: selectedLabels,
    });

    const apiUrl = `${API_URL}/search${window.location.search}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No recipes found for that filter');
        }
        return response.json();
      })
      .then((recipes) => {
        if (recipes.length === 0) {
          throw new Error('No recipes found for that filter');
        }
        setErrorMessage('');
        setRecipesData(recipes);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Handling fn for filter buttons
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const resetFilters = () => {
    setSelectedType('');
    setSelectedCategory('');
    setSelectedLabels('');
    setSelectedUser('');
    setSearchText('');
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
          <img
            src="/images/top-orange.svg"
            alt="Meal Icon"
            className="absolute right-0 top-0 z-0"
          />
          <h1 className="relative py-8 text-5xl text-white z-20">Search</h1>
        </div>
        <div className="flex flex-row flex-nowrap  relative z-20">
          <input
            type="text"
            id="search"
            className="border-2 border-gray-300 focus:outline-none py-3 px-4 rounded-md w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleOnKeyDown}
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
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="">All</option>
                      <option value="meals">Meal</option>
                      <option value="desserts">Dessert</option>
                      <option value="beverages">Beverage</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6 lg:mb-0 lg:w-1/4 lg:mx-2">
                  <label htmlFor="category" className="block mb-2 text-sm">
                    Category
                    <select
                      id="category"
                      className="bg-white border-2 border-gray-300 rounded w-full py-2"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {allCategories.map((actualCategories) => (
                        <option key={actualCategories.key} value={actualCategories.value}>
                          {actualCategories.label}
                        </option>
                      ))}
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
                      {allLabels.map((label) => (
                        <option key={label.key} value={label.value}>
                          {label.label}
                        </option>
                      ))}
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
                      value={selectedUser}
                      onChange={(e) => setSelectedUser(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <Button
                text="Apply Changes"
                type="button"
                addClassName="ml-2"
                onClick={handleSearch}
              />
              <Button
                text="Reset"
                type="button"
                onClick={resetFilters}
                addClassName="transition-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SearchFilter.propTypes = {
  setRecipesData: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default SearchFilter;
