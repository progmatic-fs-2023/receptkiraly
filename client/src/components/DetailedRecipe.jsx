import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import RecipeTitle from './RecipeTitle';
import IconContainer from './IconContainer';
import Icon from './Icon';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';

function DetailedRecipe({ editMode }) {
  const [fileUpload, setFileUpload] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [recipeTitle, setRecipeTitle] = useState('');
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
      recipeTitle: "Mákos bejgli"
    };

    setMinutes(data.minutes);
    setDifficulty(data.difficulty);
    setServes(data.serves);
  }, []);

  return (
    <form onSubmit="API CALL">
      <div className="lg:flex items-center justify-center bg-amber-300 rounded-lg">
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
              <Icon
                imgUrl="/images/time-icon.svg"
                text={`${minutes} mins`}
                editMode={editMode}
                className="bg-orange-500"
              />
            ) : null}
            {difficulty ? (
              <Icon imgUrl="/images/difficulty-icon.svg" text={difficulty} editMode={editMode} />
            ) : null}
            {serves ? (
              <Icon imgUrl="/images/serves-icon.svg" text={serves.toString()} editMode={editMode} />
            ) : null}
          </IconContainer>
          <Labels editMode={editMode} labels={labels} setLabels={setLabels} />
        </div>
      </div>
      <div className="mt-10 md:flex items-center justify-evenly bg-amber-300 rounded-lg">
        <Ingredients
          editMode={editMode}
          ingredients={ingredients}
          setIngredients={setIngredients}
          newIngredient={newIngredient}
          setNewIngredient={setNewIngredient}
        />
        <Method editMode={editMode} description={description} setDescription={setDescription} />
      </div>
      {editMode ? <button type="submit">Save</button> : null}
    </form>
  );
}

DetailedRecipe.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default DetailedRecipe;
