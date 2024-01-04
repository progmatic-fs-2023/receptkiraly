import PropTypes from 'prop-types';

function RecipeCard({ name, description, imgUrl }) {
  return (
    <div>
      {imgUrl ? <img src={imgUrl} alt="" /> : null}
      <h3>{name}</h3>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
};
<<<<<<< HEAD
RecipeCard.defaultProps = {
  description: '',
  imgUrl: '',
};
=======

>>>>>>> 50339e3 (Recipe card has additional newline at end)
export default RecipeCard;
