import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeGrid from '../components/RecipeGrid';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';
import { API_URL } from '../constants';

function SearchRecipes() {
  const [recipesData, setRecipesData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // States for one recipe
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState();
  const [minutes, setMinutes] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [serves, setServes] = useState('');
  const [category, setCategory] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [, setErrorMessage] = useState();

  const stateObject = {
    title: {
      value: recipeTitle,
      setter: setRecipeTitle,
    },
    description: {
      value: description,
      setter: setDescription,
    },
    image: {
      value: imgUrl,
      setter: setImgUrl,
    },
    time: {
      value: minutes,
      setter: setMinutes,
    },
    difficulty: {
      value: difficulty,
      setter: setDifficulty,
    },
    serves: {
      value: serves,
      setter: setServes,
    },
    category: {
      value: category,
      setter: setCategory,
    },
    mainCategory: {
      value: selectedMainCategory,
      setter: setSelectedMainCategory,
    },
    labels: {
      value: selectedOptions,
      setter: setSelectedOptions,
    },
    ingredients: {
      value: ingredients,
      setter: setIngredients,
    },
  };
  // ------------------- End of the Detailed Recipe States

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

  // Modal functions
  const openModal = async (id) => {
    setSelectedRecipe(id);
    setModalOpen(true);

    try {
      // console.log(`Recipe ID search URL: http://localhost:3000/api/recipes/${id}`);
      const response = await fetch(`${API_URL}/recipes/${id}`);
      const recipe = await response.json();

      setRecipeTitle(recipe.recipe_name);
      setDescription(recipe.description);
      setImgUrl(recipe.img);
      setMinutes(recipe.time_minutes);
      setDifficulty(recipe.difficulty_level);
      setServes(recipe.serve_count);
      setCategory(recipe.category_name);
      setSelectedMainCategory(recipe.main_category_name);
      setSelectedOptions(recipe.label_name);

      // console.log(recipe);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  // ---------------------------

  return (
    <section className="container mx-auto my-2">
      <SearchForm setRecipesData={setRecipesData} />
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
        <Modal title="Detailed Recipe" close={closeModal}>
          <DetailedRecipe recipeID={selectedRecipe} stateObject={stateObject} />
        </Modal>
      )}
    </section>
  );
}
export default SearchRecipes;
