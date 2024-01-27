import PropTypes from 'prop-types';
import { Edit, Delete } from '@mui/icons-material';
import Icon from './Icon';
import ResponsiveImage from './ResponsiveImage';
import IconContainer from './IconContainer';
import { API_URL } from '../constants';

function RecipeCard({
  id,
  imgUrl,
  minutes,
  difficulty,
  serves,
  name,
  actions,
  openModal,
  editButtonClicked,
}) {
  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      openModal(id);
    }
  };

  const deleteRecipe = async () => {
    const recipeID = id;
    try {
      const response = await fetch(`${API_URL}/recipes/deleterecipe`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipeID }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // console.log('Recipe deleted successfully');
    } catch (error) {
      // console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleOnKeyDown}
        className="block group"
        onClick={() => openModal(id)}
      >
        {actions ? (
          <div className="justify-between flex">
            <div className="relative  ">
              <div
                aria-label="Edit"
                role="button"
                tabIndex={0}
                onKeyDown={handleOnKeyDown}
                className="absolute top-2 left-2 bg-white bg-opacity-75 rounded hover:filter hover:invert"
                onClick={() => editButtonClicked()}
              >
                <Edit />
              </div>
            </div>
            <div className="relative">
              <div
                aria-label="Delete"
                role="button"
                tabIndex={0}
                onKeyDown={handleOnKeyDown}
                className="absolute top-2 right-2 bg-white bg-opacity-75 rounded hover:filter hover:invert"
                onClick={() => deleteRecipe()}
              >
                <Delete />
              </div>
            </div>
          </div>
        ) : null}
        <ResponsiveImage imgUrl={imgUrl} />
        <IconContainer>
          {minutes ? <Icon imgUrl="/images/time-icon.svg" text={`${minutes} mins`} /> : null}
          {difficulty ? (
            <Icon imgUrl="/images/difficulty-icon.svg" text={difficulty.toString()} />
          ) : null}
          {serves ? <Icon imgUrl="/images/serves-icon.svg" text={serves.toString()} /> : null}
        </IconContainer>
        <div className="flex justify-center mt-3">
          <h3 className="group-hover:text-primary">{name}</h3>
        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  minutes: PropTypes.number,
  difficulty: PropTypes.number,
  serves: PropTypes.number,
  name: PropTypes.string.isRequired,
  actions: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  editButtonClicked: PropTypes.func.isRequired,
};

RecipeCard.defaultProps = {
  minutes: null,
  difficulty: null,
  serves: null,
  actions: false,
};
export default RecipeCard;
