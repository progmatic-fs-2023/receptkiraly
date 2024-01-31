import React, { useState, useEffect, useContext } from 'react';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';
import LoginDispatchContext from '../contexts/LoginDispatchContext';
import Logo from '../assets/Logo.png';
import Login from './Login';
import Button from './Button';
import Tooltips from './Tooltips';
import { API_URL } from '../constants';

function Banner() {
  const isAuthenticated = useContext(LoginContext);
  const setIsAuthenticated = useContext(LoginDispatchContext);
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return '';
    };

    const token = getCookie('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleSearch = () => {
    navigate(`/search?type=${selectedType}&title=${encodeURIComponent(searchText)}`);
    setSearchText('');
    setSelectedType('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    fetch(`${API_URL}/login`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          setIsAuthenticated(false);
          navigate('/');
        } else if (response.status === 401) {
          throw new Error('not logged in');
        } else {
          throw new Error(response.body);
        }
      })
      .catch((err) => {
        alert(err.message); // eslint-disable-line no-alert
      });
  };

  return (
    <div className="container mx-auto flex flex-wrap flex-row sm:justify-between justify-center py-6 relative z-20">
      <div className="flex flex-wrap flex-row w-full md:w-3/4 justify-around items-center">
        <Link to="/" className="focus:outline-none">
          <img src={Logo} alt="Recipe King" className="logo" />
        </Link>
        <div className="flex flex-nowrap flex-row items-center">
          <div className="flex flex-nowrap flex-row">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="flex-shrink-0 z-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            >
              <option>All types</option>
              <option value="meals">Meals</option>
              <option value="desserts">Desserts</option>
              <option value="beverages">Beverages</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-96 block p-2 z-20 text-sm text-gray-900 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button type="button" addImage="/images/icons/search.svg" onClick={handleSearch} />
        </div>
      </div>
      <div className="flex flex-grow justify-center items-center sm:mt-4 md:mt-0">
        {isAuthenticated ? (
          <Link to="/postrecipe">
            <Button text="Post Recipe" type="button" addImage="/images/icons/post.svg" />
          </Link>
        ) : (
          <Link to="/postrecipe">
            <Tooltips title="Sign in to post new recipe!">
              <Button
                text="Post Recipe"
                type="button"
                addImage="/images/icons/post.svg"
                addClassName="grayscale disabled-button"
                disabled
              />
            </Tooltips>
          </Link>
        )}
        <nav>
          <ul>
            <li>
              {isAuthenticated ? (
                <NavLink to="/profile">
                  <Button text="Profile" type="button" addImage="/images/icons/profile.svg" />
                </NavLink>
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )}
            </li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <Button
            text="Log out"
            type="button"
            addImage="/images/icons/logout.svg"
            onClick={handleLogout}
          />
        ) : (
          <Link to="/register">
            <Button text="Sign Up" type="button" addImage="/images/icons/login.svg" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Banner;
