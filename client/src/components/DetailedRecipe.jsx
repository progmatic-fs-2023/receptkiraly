import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import IconContainer from './IconContainer';
import Icon from './Icon';
import RecipeText from './RecipeText';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';

function DetailedRecipe({ editMode }) {
  const [minutes, setMinutes] = useState();
  const [difficulty, setDifficulty] = useState();
  const [serves, setServes] = useState();

  useEffect(() => {
    // API call here
    // Dummy data
    const data = {
      minutes: '60',
      difficulty: 'Very easy',
      serves: '4',
    };

    setMinutes(data.minutes);
    setDifficulty(data.difficulty);
    setServes(data.serves);
  }, []);

  return (
    <div className="container">
      <div className="felsődiv">
        <ImageUpload editMode={editMode} />
        <div className="képmellettidiv">
          <IconContainer>
            {minutes ? (
              <Icon
                imgUrl="/images/time-icon.svg"
                text={`${minutes} mins`}
                editMode={editMode}
              />
            ) : null}
            {difficulty ? (
              <Icon
                imgUrl="/images/difficulty-icon.svg"
                text={difficulty}
                editMode={editMode}
              />
            ) : null}
            {serves ? (
              <Icon
                imgUrl="/images/serves-icon.svg"
                text={serves.toString()}
                editMode={editMode}
              />
            ) : null}
          </IconContainer>
          <RecipeText editMode={editMode} />
          <Labels editMode={editMode} />
        </div>
      </div>
      <div className="alsódiv">
        <Ingredients editMode={editMode} />
        <Method editMode={editMode} />
      </div>
    </div>
  );
}

DetailedRecipe.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default DetailedRecipe;
