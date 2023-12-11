import RecipeCard from '../components/RecipeCard.jsx';
import { useState, useEffect } from 'react';
import { API_URL } from '../constants.js';
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(API_URL + '/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />;
      })}
    </div>
  );
};
export default Recipes;
