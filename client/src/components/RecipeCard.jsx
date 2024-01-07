import PropTypes from 'prop-types';

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
};

RecipeCard.defaultProps = {
  description: '',
  imgUrl: '',
};
export default RecipeCard;
