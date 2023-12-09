import RecipeCard from '../components/RecipeCard.jsx';
import { useState, useEffect } from 'react';
import { TEMP_RECIPES, API_URL_GET_RECIPES } from '../constants.js';
const Recipes = () => {
  const [recipes, setRecipes] = useState(TEMP_RECIPES);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(API_URL_GET_RECIPES);
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
