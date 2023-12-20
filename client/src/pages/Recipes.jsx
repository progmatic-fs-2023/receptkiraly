'use client';

import { useState, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import RecipeCard from '../components/RecipeCard';
import { API_URL } from '../constants';

function RecipesFeed() {
  const [recipes, setRecipes] = useState([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/recipes`);
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        showBoundary(err);
      }
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
export default RecipesFeed;