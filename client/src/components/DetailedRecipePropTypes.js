import PropTypes from 'prop-types';

export const propTypes = {
  editMode: PropTypes.bool.isRequired,
  recipeID: PropTypes.number,

  stateObject: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    description: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    image: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    time: PropTypes.shape({
      value: PropTypes.number.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    difficulty: PropTypes.shape({
      value: PropTypes.number.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    serves: PropTypes.shape({
      value: PropTypes.number.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    category: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    mainCategory: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    labels: PropTypes.shape({
      value: PropTypes.arrayOf(PropTypes.string).isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,

    ingredients: PropTypes.shape({
      value: PropTypes.arrayOf(PropTypes.string).isRequired,
      setter: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  editButtonClicked: PropTypes.bool,
};

export const defaultProps = {
  recipeID: 0,
  editButtonClicked: false,
};
