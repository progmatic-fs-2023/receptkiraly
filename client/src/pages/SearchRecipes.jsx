import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeGrid from '../components/RecipeGrid';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';
import { API_URL } from '../constants';
import useRecipeCardModal from '../hooks/useRecipeCardModal';

function SearchRecipes() {
  const [recipesData, setRecipesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { stateObject, closeModal, openModal, isModalOpen, selectedRecipe } = useRecipeCardModal();
  useEffect(() => {
    const apiUrl = `${API_URL}/search${window.location.search}`;
    // console.log(`Navigation Search URL: ${apiUrl}`);
    setErrorMessage('');
    fetch(apiUrl)
      .then((response) => {
        console.log(response.status);
        if (response.status === 404) throw new Error('No recipes found for that filter');
        return response.json();
      })

      .then((recipes) => {
        setRecipesData(recipes);
        // console.log(recipes);
      })
      .catch((err) => {});
  }, []);

  return (
    <section className="container mx-auto my-2">
      <SearchForm setRecipesData={setRecipesData} />

      {errorMessage === '' ? (
        <RecipeGrid>
          {recipesData.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              imgUrl={recipe.img}
              minutes={recipe.time_minutes}
              difficulty={recipe.difficulty_level}
              serves={recipe.serve_count}
              name={recipe.recipe_name}
              openModal={openModal}
            />
          ))}
        </RecipeGrid>
      ) : (
        <div
          class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Recipe king alert!</span> {errorMessage}
          </div>
        </div>
      )}

      {isModalOpen && (
        <Modal title="Detailed Recipe" close={closeModal}>
          <DetailedRecipe editMode={false} recipeID={selectedRecipe} stateObject={stateObject} />
        </Modal>
      )}
    </section>
  );
}
export default SearchRecipes;
