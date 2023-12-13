import PropTypes from 'prop-types';

function RecipeCard({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeCard;
