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
  // const [labels, setLabels] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [description, setDescription] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [minutes, setMinutes] = useState();
  const [difficulty, setDifficulty] = useState();
  const [serves, setServes] = useState();

  useEffect(() => {
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

  return (
    <form onSubmit="API CALL">
      <div className="lg:flex items-center justify-center bg-orange-50 rounded-lg">
        <ImageUpload
          editMode={editMode}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
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
          <Button
            type="submit"
            text="Save"
            className="flex mx-auto bg-amber-300 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg font-medium"
          />
        ) : null}
      </div>
    </form>
  );
}

DetailedRecipe.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default DetailedRecipe;
