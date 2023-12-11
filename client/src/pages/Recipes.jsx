import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { API_URL } from '../constants';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`${API_URL}recipes`);
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />
      ))}
    </div>
  );
}
export default Recipes;
