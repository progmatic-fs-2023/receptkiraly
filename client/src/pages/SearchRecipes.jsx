import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeGrid from '../components/RecipeGrid';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';
import { API_URL, HOST_PORT_URL } from '../constants';
import useRecipeCardModal from '../hooks/useRecipeCardModal';

function SearchRecipes() {
  const [recipesData, setRecipesData] = useState([]);

  const { stateObject, closeModal, openModal, isModalOpen, selectedRecipe } = useRecipeCardModal();

  useEffect(() => {
    const apiUrl = `${API_URL}/search${window.location.search}`;
    // console.log(`Navigation Search URL: ${apiUrl}`);

    fetch(apiUrl)
      .then((response) => response.json())

      .then((recipes) => {
        setRecipesData(recipes);
        // console.log(recipes);
      });
  }, []);

  return (
    <section className="container mx-auto my-2">
      <SearchForm setRecipesData={setRecipesData} />
      <RecipeGrid>
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            imgUrl={`${HOST_PORT_URL}/${recipe.img}`}
            minutes={recipe.time_minutes}
            difficulty={recipe.difficulty_level}
            serves={recipe.serve_count}
            name={recipe.recipe_name}
            openModal={openModal}
          />
        ))}
      </RecipeGrid>
      {isModalOpen && (
        <Modal title="Detailed Recipe" close={closeModal}>
          <DetailedRecipe recipeID={selectedRecipe} stateObject={stateObject} />
        </Modal>
      )}
    </section>
  );
}
export default SearchRecipes;
