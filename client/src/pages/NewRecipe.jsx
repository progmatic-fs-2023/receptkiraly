import { useState } from 'react';
import DetailedRecipe from '../components/DetailedRecipe';

function NewRecipe() {
  const editMode = true;

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

  return (
    <section className="container mx-auto my-2">
      <DetailedRecipe editMode={editMode} stateObject={stateObject} />
    </section>
  );
}

export default NewRecipe;
