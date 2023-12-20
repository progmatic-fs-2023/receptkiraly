import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recipesfeed">Recipes Feed</NavLink>
        </li>
        <li>
          <NavLink to="/searchrecipes">Search Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/battle">Battle</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
