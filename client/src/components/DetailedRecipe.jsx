import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import IconContainer from './IconContainer';
import Icon from './Icon';
import RecipeText from './RecipeText';
import Labels from './LabelsComp';
import Ingredients from './IngredientsComp';
import Method from './MethodComp';

function DetailedRecipe({ isLoggedIn }) {
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
        <ImageUpload isLoggedIn={isLoggedIn} />
        <div className="képmellettidiv">
          <IconContainer>
            {minutes ? (
              <Icon
                imgUrl="/images/time-icon.svg"
                text={`${minutes} mins`}
                isLoggedIn={isLoggedIn}
              />
            ) : null}
            {difficulty ? (
              <Icon
                imgUrl="/images/difficulty-icon.svg"
                text={difficulty}
                isLoggedIn={isLoggedIn}
              />
            ) : null}
            {serves ? (
              <Icon
                imgUrl="/images/serves-icon.svg"
                text={serves.toString()}
                isLoggedIn={isLoggedIn}
              />
            ) : null}
          </IconContainer>
          <RecipeText isLoggedIn={isLoggedIn} />
          <Labels isLoggedIn={isLoggedIn} />
        </div>
      </div>
      <div className="alsódiv">
        <Ingredients isLoggedIn={isLoggedIn} />
        <Method isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

DetailedRecipe.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default DetailedRecipe;
