import PropTypes from 'prop-types';
import './RecipePostsCard.css';
import Button from './Button';

function RecipePostsCard({
  imgUrl,
  name,
  description,
  visualRating,
  tasteRating,
  iCockedIt,
  ingredients,
}) {
  return (
    <div className="pots-body">
      <div className="pots-container">
        <div className="pots-card">
          <img src={imgUrl} alt="" className="pots-card-image" />

          <div>
            <h2>{name}</h2>
            <p className="posts-ingredients-main">Ingredients</p>
            <p className="posts-ingredients">{ingredients}</p>
            <p className="posts-creating">Prepare</p>
            <p className="posts-description">{description}</p>
            <div className="posts-ratings">
              <h3>Visual ⭐ {visualRating} / 5</h3>
              <h3>Taste ⭐ {tasteRating} / 5</h3>
              <h3>Like {iCockedIt} ❤ </h3>
            </div>
            <div className="posts-button">
              <Button text="I want to Cook It" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipePostsCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tasteRating: PropTypes.number.isRequired,
  visualRating: PropTypes.number.isRequired,
  iCockedIt: PropTypes.bool.isRequired,
  ingredients: PropTypes.string.isRequired,
};

export default RecipePostsCard;
