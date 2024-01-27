import axios from 'axios';
import { useState } from 'react';
import { propTypes, defaultProps } from './DetailedRecipePropTypes';
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
import { API_URL } from '../constants';

function DetailedRecipe({ editMode, stateObject }) {
  const [fileUpload, setFileUpload] = useState();
  const [newIngredient, setNewIngredient] = useState('');
  const [errorMessage] = useState();

  const emptyFields =
    stateObject.title.value === '' ||
    stateObject.image.value === undefined ||
    stateObject.description.value === undefined ||
    stateObject.mainCategory.value === undefined ||
    stateObject.category.value === undefined ||
    stateObject.difficulty.value === undefined ||
    stateObject.labels.value.length === 0 ||
    stateObject.ingredients.value.length === 0 ||
    stateObject.time.value === undefined ||
    stateObject.serves.value === undefined;

  const uploadRecipe = () => {
    const formData = new FormData();
    formData.append('recipeName', stateObject.title.value);
    formData.append('recipeDescription', stateObject.description.value);
    formData.append('recipeTimeMinutes', stateObject.time.value);
    formData.append('recipeDifficultyLevel', stateObject.difficulty.value);
    formData.append('recipeServeCount', stateObject.serves.value);
    formData.append('recipeCategory', stateObject.category.value);

    stateObject.labels.value.forEach((option) => {
      formData.append('recipeLabels', option);
    });

    formData.append('image', fileUpload);
    axios.post(`${API_URL}/recipes/newrecipe`, formData, {
      withCredentials: true,
    });
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
                imgUrl={stateObject.image.value}
                setImgUrl={stateObject.image.setter}
              />
            </div>
            <div className="flex-grow flex flex-wrap flex-col">
              <RecipeTitle
                editMode={editMode}
                recipeTitle={stateObject.title.value}
                setRecipeTitle={stateObject.title.setter}
              />
              <Method
                editMode={editMode}
                description={stateObject.description.value}
                setDescription={stateObject.description.setter}
              />
              <Ingredients
                editMode={editMode}
                ingredients={stateObject.ingredients.value}
                setIngredients={stateObject.ingredients.setter}
                newIngredient={newIngredient}
                setNewIngredient={setNewIngredient}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-2 mt-4 lg:mt-0 mx-1">
            <RecipeMainCategory
              editMode={editMode}
              selectedMainCategory={stateObject.mainCategory.value}
              setSelectedMainCategory={stateObject.mainCategory.setter}
            />
            <RecipeCategory
              editMode={editMode}
              category={stateObject.category.value}
              setCategory={stateObject.category.setter}
              selectedMainCategory={stateObject.mainCategory.value}
            />
            <div className="flex flex-nowrap flex-row items-center w-full">
              <Icons
                editMode={editMode}
                minutes={stateObject.time.value}
                setMinutes={stateObject.time.setter}
                difficulty={stateObject.difficulty.value}
                setDifficulty={stateObject.difficulty.setter}
                serves={stateObject.serves.value}
                setServes={stateObject.serves.setter}
                addClassName="text-right w-28"
              />
              <RecipeDifficulty
                editMode={editMode}
                difficulty={stateObject.difficulty.value}
                setDifficulty={stateObject.difficulty.setter}
              />
            </div>
            <Labels
              editMode={editMode}
              selectedOptions={stateObject.labels.value}
              setSelectedOptions={stateObject.labels.setter}
            />
          </div>
        </div>
        {editMode ? (
          <Button
            text="Save"
            onClick={uploadRecipe}
            addClassName={`text-white px-4 py-2 rounded focus:outline-none  ${
              emptyFields
                ? 'custom-button-color border custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1 grayscale disabled-button'
                : 'bg-amber-200'
            } rounded text-lg `}
            disabled={emptyFields}
          />
        ) : null}
      </form>
    </div>
  );
}

DetailedRecipe.propTypes = propTypes;
DetailedRecipe.defaultProps = defaultProps;

export default DetailedRecipe;
