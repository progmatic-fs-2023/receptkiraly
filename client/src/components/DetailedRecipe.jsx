import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import RecipeTitle from './RecipeTitle';
import IconContainer from './IconContainer';
import Icon from './Icon';
import RecipeMainCategory from './RecipeMainCategory';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';

function DetailedRecipe({ editMode }) {
  const [fileUpload, setFileUpload] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('Meals');
  const [labels, setLabels] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [description, setDescription] = useState();

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
      <div className="lg:flex items-center justify-center bg-orange-400 rounded-lg">
        <ImageUpload
          editMode={editMode}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
        />
        <div>
          <RecipeTitle
            editMode={editMode}
            recipeTitle={recipeTitle}
            setRecipeTitle={setRecipeTitle}
          />
          <IconContainer>
            {minutes ? (
              <Icon imgUrl="/images/time-icon.svg" text={`${minutes} mins`} editMode={editMode} />
            ) : null}
            {difficulty ? (
              <Icon imgUrl="/images/difficulty-icon.svg" text={difficulty} editMode={editMode} />
            ) : null}
            {serves ? (
              <Icon imgUrl="/images/serves-icon.svg" text={serves.toString()} editMode={editMode} />
            ) : null}
          </IconContainer>
          <RecipeMainCategory
            editMode={editMode}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Labels editMode={editMode} labels={labels} setLabels={setLabels} />
        </div>
      </div>
      <div className="bg-orange-400 rounded-lg">
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
            type="submit"
            className="flex mx-auto bg-amber-300 text-trueGray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
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
