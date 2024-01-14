import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import RecipeTitle from './RecipeTitle';
import IconContainer from './IconContainer';
import Icon from './Icon';
import RecipeMainCategory from './RecipeMainCategory';
import RecipeCategory from './RecipeCategory';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';
import Button from './Button';

function DetailedRecipe({ editMode }) {
  const [fileUpload, setFileUpload] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState('Meals');
  const [category, setCategory] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [description, setDescription] = useState();
  const [minutes, setMinutes] = useState();
  const [difficulty, setDifficulty] = useState();
  const [serves, setServes] = useState();

  useEffect(async () => {
    // const response = await fetch('/api/recipes/');

    // API call here
    // Dummy data
    const data = {
      minutes: '60',
      difficulty: 'easy',
      serves: '4',
      recipeTitle: 'Mákos bejgli',
    };

    setMinutes(data.minutes);
    setDifficulty(data.difficulty);
    setServes(data.serves);
  }, []);

  const uploadRecipe = async () => {
    const formData = new FormData();
    formData.append('recipeName', recipeTitle);
    formData.append('recipeDescription', description);
    formData.append('recipeImg', imgUrl);
    formData.append('recipeTimeMinutes', minutes);
    formData.append('recipeDifficultyLevel', difficulty);
    formData.append('recipeServeCount', serves);
    formData.append('recipeCategory', category);
    formData.append('recipeLabels', selectedOptions);
    formData.append('image', fileUpload);

    try {
      const response = await fetch('/api/recipes/newrecipe', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      const uploadedImageUrl = responseData.imageUrl;
      setImgUrl(uploadedImageUrl);

      if (response.status === 200) {
        // alert('Recipe saved!');
      } else {
        // alert('Something went wrong.');
      }
    } catch (error) {
      // alert('Error uploading recipe: ', error);
    }
  };

  return (
    <form encType="multipart/form-data">
      <div className="lg:flex items-center justify-center bg-orange-50 rounded-lg">
        <ImageUpload
          editMode={editMode}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          imgUrl={imgUrl}
        />
        <div>
          <IconContainer>
            {minutes ? (
              <Icon imgUrl="/images/time-icon.svg" text={`${minutes} mins`} editMode={editMode} />
            ) : null}
            {difficulty ? (
              <Icon imgUrl="/images/difficulty-icon.svg" text={difficulty} editMode={editMode} />
            ) : null}
            {serves ? (
              <Icon imgUrl="/images/serves-icon.svg" text={serves.toString()} editMode={editMode} />
            ) : null}{' '}
          </IconContainer>

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
            <RecipeCategory editMode={editMode} category={category} setCategory={setCategory} />
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
        {editMode ? (
          <button
            type="button"
            className="flex mx-auto bg-amber-300 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg font-medium"
            onClick={uploadRecipe}
          >
            Save
          </button>
        ) : null}
      </div>
    </form>
  );
}

DetailedRecipe.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default DetailedRecipe;
