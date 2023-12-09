import RecipeCard from '../components/RecipeCard.jsx';
import { useState } from 'react';
import { TEMP_RECIPES } from '../constants.js';
const Recipes = () => {
  const [recipes, setRecipes] = useState(TEMP_RECIPES);
  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />;
      })}
    </div>
  );
};
export default Recipes;
