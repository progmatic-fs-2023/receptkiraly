import { NavLink } from 'react-router-dom';

function NavigationBar() {

  return (
    <nav>
      <ul className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-x-5">
        <li>
          <NavLink to="/" className="bg-orange-400 text-white px-4 py-2 rounded">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipesfeed" className="bg-orange-400 text-white px-4 py-2 rounded">
            Recipes Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="bg-orange-400 text-white px-4 py-2 rounded">
            Search Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/battle" className="bg-orange-400 text-white px-4 py-2 rounded">
            Battle
          </NavLink>
        </li>
        <li>
          <NavLink to="/rankings" className="bg-orange-400 text-white px-4 py-2 rounded">
            Rankings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;