import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeGrid from '../components/RecipeGrid';
import ModalRecipe from '../components/ModalRecipe';
import DetailedRecipe from '../components/DetailedRecipe';

function SearchRecipes() {
  const [recipesData, setRecipesData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (id) => {
    setSelectedRecipe(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/recipes')
      .then((response) => {
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes data:', error);
      });
  }, []);

  console.log(recipesData);

  return (
    <section className="container mx-auto my-2">
      <SearchForm />
      <RecipeGrid>
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            imgUrl={`http://localhost:3000/${recipe.img}`}
            minutes={recipe.time_minutes}
            difficulty={recipe.difficulty_level}
            serves={recipe.serve_count}
            name={recipe.name}
            openModal={openModal}
          />
        ))}
      </RecipeGrid>
      {isModalOpen && (
        <ModalRecipe title="Detailed Recipe" close={closeModal}>
          <DetailedRecipe editMode recipeID={selectedRecipe} />
        </ModalRecipe>
      )}
    </section>
  );
}
export default SearchRecipes;
