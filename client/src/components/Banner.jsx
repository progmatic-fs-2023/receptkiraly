import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Login from './Login';

function Banner() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchText, setSearchText] = useState('');
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
    navigate(`/search?q=${encodeURIComponent(searchText)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto flex flex-col sm:flex-col md:flex-row justify-between py-6 sm:h-28">
      <div className="sm:hidden">
        <div className="flex justify-center mb-4">
          <Link to="/" className="focus:outline-none">
            <img src={Logo} alt="Recipe King" className="logo" />
          </Link>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-96 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="hidden sm:flex w-full md:w-3/4 justify-around sm:items-end">
        <Link to="/" className="focus:outline-none">
          <img src={Logo} alt="Recipe King" className="logo" />
        </Link>
        <div className="flex items-end mx-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-96 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-1"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mt-4 md:mt-0">
        <nav>
          <ul>
            <li>
              {isAuthenticated ? (
                <NavLink
                  to="/profile"
                  className="bg-orange-500 text-white px-4 py-2 rounded focus:outline-none mx-1"
                >
                  Profile
                </NavLink>
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )}
            </li>
          </ul>
        </nav>
        <Link
          to="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none mx-1"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Banner;
