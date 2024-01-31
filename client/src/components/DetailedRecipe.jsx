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

function DetailedRecipe({
  editMode,
  recipeID,
  stateObject,
  editButtonClicked,
  closeModal,
  setMyRecipes,
}) {
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
    stateObject.time.value === 0 ||
    stateObject.serves.value === 0;

  const refreshRecipes = () => {
    fetch(`${API_URL}/user/recipes/`, { credentials: 'include' })
      .then((response) => {
        if (!response.ok) throw new Error('Recipes cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setMyRecipes(data);
      });
  };

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

    stateObject.ingredients.value.forEach((option) => {
      formData.append('recipeIngredients', option);
    });

    formData.append('image', fileUpload);
    axios
      .post(`${API_URL}/recipes/newrecipe`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 201) {
          alert('Recipe upload is successful!'); // eslint-disable-line no-alert
          closeModal();
          if (setMyRecipes) {
            refreshRecipes();
          }
        } else {
          throw new Error('Error while uploading recipe');
        }
      })
      .catch((error) => {
        alert(error.message); // eslint-disable-line no-alert
      });
  };

  const modifyRecipe = () => {
    const formData = new FormData();
    formData.append('recipeID', recipeID);
    formData.append('recipeName', stateObject.title.value);
    formData.append('recipeDescription', stateObject.description.value);
    formData.append('recipeTimeMinutes', stateObject.time.value);
    formData.append('recipeDifficultyLevel', stateObject.difficulty.value);
    formData.append('recipeServeCount', stateObject.serves.value);
    formData.append('recipeCategory', stateObject.category.value);

    stateObject.labels.value.forEach((option) => {
      formData.append('recipeLabels', option);
    });

    stateObject.ingredients.value.forEach((option) => {
      formData.append('recipeIngredients', option);
    });

    formData.append('image', fileUpload || stateObject.image.value);
    axios
      .patch(`${API_URL}/recipes/modifyrecipe`, formData)
      .then((response) => {
        if (response.status === 200) {
          alert('Recipe modification was successful!'); // eslint-disable-line no-alert
          closeModal();
          if (setMyRecipes) {
            refreshRecipes();
          }
        } else {
          throw new Error('Error while modifying recipe');
        }
      })
      .catch((error) => {
        alert(error.message); // eslint-disable-line no-alert
      });
  };

  return errorMessage ? (
    <div>
      <p>{errorMessage}</p>
    </div>
  ) : (
    <div>
      <form encType="multipart/form-data" className="flex flex-col flex-nowrap items-center">
        <div className="lg:w-1/2 flex flex-col justify-around">
          <div>
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
          </div>
          <div className="flex flex-nowrap flex-row justify-between items-end">
            <RecipeTitle
              editMode={editMode}
              recipeTitle={stateObject.title.value}
              setRecipeTitle={stateObject.title.setter}
            />
            <div className="flex flex-row justify-end items-center">
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
          </div>
          <div className="my-3">
            <ImageUpload
              editMode={editMode}
              fileUpload={fileUpload}
              setFileUpload={setFileUpload}
              imgUrl={stateObject.image.value === '' ? undefined : stateObject.image.value}
              setImgUrl={stateObject.image.setter}
            />
          </div>
          <div className="flex justify-center items-center">
            <Labels
              editMode={editMode}
              selectedOptions={stateObject.labels.value}
              setSelectedOptions={stateObject.labels.setter}
            />
          </div>
          <Method
            editMode={editMode}
            description={stateObject.description.value}
            setDescription={stateObject.description.setter}
          />
          <div>
            <Ingredients
              editMode={editMode}
              ingredients={stateObject.ingredients.value}
              setIngredients={stateObject.ingredients.setter}
              newIngredient={newIngredient}
              setNewIngredient={setNewIngredient}
            />
          </div>
        </div>
        {editMode && !editButtonClicked ? (
          <Button
            text="Upload Recipe!"
            onClick={uploadRecipe}
            addClassName={`text-white px-4 py-1 my-2 rounded focus:outline-none  ${
              emptyFields
                ? 'custom-button-color border custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1 grayscale disabled-button'
                : 'bg-amber-200'
            } rounded text-lg `}
            disabled={emptyFields}
            addImage="/images/icons/post.svg"
          />
        ) : null}

        {editButtonClicked ? (
          <Button
            text="Modify"
            onClick={modifyRecipe}
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
