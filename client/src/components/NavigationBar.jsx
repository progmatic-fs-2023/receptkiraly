import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';

function NavigationBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return (
    <nav>
      <ul className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-x-5">
        <li>
          <NavLink to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipesfeed" className="bg-blue-500 text-white px-4 py-2 rounded">
            Recipes Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/searchrecipes" className="bg-blue-500 text-white px-4 py-2 rounded">
            Search Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/battle" className="bg-blue-500 text-white px-4 py-2 rounded">
            Battle
          </NavLink>
        </li>
        <li>
          <NavLink to="/rankings" className="bg-blue-500 text-white px-4 py-2 rounded">
            Rankings
          </NavLink>
        </li>
        <li>
        {isAuthenticated ? (
            <NavLink to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded">
              Profile
            </NavLink>
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;