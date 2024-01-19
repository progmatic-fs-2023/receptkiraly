import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageUpload from './ImageUpload';
import RecipeTitle from './RecipeTitle';
import Icons from './IconsInDetailedRecipe';
import RecipeMainCategory from './RecipeMainCategory';
import RecipeCategory from './RecipeCategory';
import RecipeDifficulty from './RecipeDifficulty';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';
import Button from './Button';

function DetailedRecipe({ editMode, recipeID }) {
  const [fileUpload, setFileUpload] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState('Meals');
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [description, setDescription] = useState();
  const [minutes, setMinutes] = useState();
  const [serves, setServes] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (!editMode) {
      axios
        .get(`/api/recipes/${recipeID}`)
        .then((response) => {
          setRecipeTitle(response.recipeName);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, []);

  const uploadRecipe = () => {
    const formData = new FormData();
    formData.append('recipeName', recipeTitle);
    formData.append('recipeDescription', description);
    formData.append('recipeTimeMinutes', minutes);
    formData.append('recipeDifficultyLevel', difficulty);
    formData.append('recipeServeCount', serves);
    formData.append('recipeCategory', category);
    selectedOptions.forEach((option) => {
      formData.append('recipeLabels', option);
    });
    formData.append('image', fileUpload);

    axios.post('/api/recipes/newrecipe', formData);
  };

  return errorMessage ? (
    <div>
      <p>{errorMessage}</p>
    </div>
  ) : (
    <div>
      <form form encType="multipart/form-data" className="flex flex-col flex-nowrap items-center">
        <div className="flex flex-col lg:flex-row my-4">
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between lg:w-2/3 p-2">
            <div className="flex-1">
              <ImageUpload
                editMode={editMode}
                fileUpload={fileUpload}
                setFileUpload={setFileUpload}
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
            </div>
            <div className="flex-grow flex flex-wrap flex-col">
              <RecipeTitle
                editMode={editMode}
                recipeTitle={recipeTitle}
                setRecipeTitle={setRecipeTitle}
              />
              <Method editMode={editMode} description={description} setDescription={setDescription} />
              <Ingredients
            editMode={editMode}
            ingredients={ingredients}
            setIngredients={setIngredients}
            newIngredient={newIngredient}
            setNewIngredient={setNewIngredient}
          />
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-2 mt-4 lg:mt-0 mx-1">
            <RecipeMainCategory
              editMode={editMode}
              selectedMainCategory={selectedMainCategory}
              setSelectedMainCategory={setSelectedMainCategory}
            />
            <RecipeCategory editMode={editMode} category={category} setCategory={setCategory} />
            <div className="flex flex-nowrap flex-row items-center w-full">
            <Icons
            editMode={editMode}
            minutes={minutes}
            setMinutes={setMinutes}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            serves={serves}
            setServes={setServes}
            addClassName="text-right w-28"
          />
          <RecipeTitle
            editMode={editMode}
            recipeTitle={recipeTitle}
            setRecipeTitle={setRecipeTitle}
          />
          <RecipeMainCategory
            editMode={editMode}
            selectedMainCategory={selectedMainCategory}
            setSelectedMainCategory={setSelectedMainCategory}
          />
          <div className="flex justify-center items-center">
            <RecipeCategory
              editMode={editMode}
              category={category}
              setCategory={setCategory}
              selectedMainCategory={selectedMainCategory}
            />
            <RecipeDifficulty editMode={editMode} difficulty={difficulty} setDifficulty={setDifficulty} />
            </div>
            <Labels
              editMode={editMode}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
        </div>
      </div>
      <div className="bg-orange-50 rounded-lg">
        <div className="mt-10 md:flex items-center justify-evenly">
          <Ingredients
            editMode={editMode}
            ingredients={ingredients}
            setIngredients={setIngredients}
            newIngredient={newIngredient}
            setNewIngredient={setNewIngredient}
          />
          <Method editMode={editMode} description={description} setDescription={setDescription} />
        </div>
        {editMode ? <Button text="Save" onClick={uploadRecipe} /> : null}
      </div>
    </form>
  );
}

DetailedRecipe.propTypes = {
  editMode: PropTypes.bool.isRequired,
  recipeID: PropTypes.number,
};

DetailedRecipe.defaultProps = {
  recipeID: 0,
};

export default DetailedRecipe;
