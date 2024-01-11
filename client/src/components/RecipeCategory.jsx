import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeCategory({ editMode, category, setCategory }) {
  const onValueChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const categories = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
    { value: 'Appetizer', label: 'Appetizer' },
    { value: 'Cheesecake', label: 'Cheesecake' },
    { value: 'Cake', label: 'Cake' },
    { value: 'Cookie', label: 'Cookie' },
    { value: 'Cocktail', label: 'Cocktail' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Pie', label: 'Pie' },
    { value: 'Pizza', label: 'Pizza' },
    { value: 'Hamburger', label: 'Hamburger' },
    { value: 'Pasta', label: 'Pasta' },
    { value: 'Salad', label: 'Salad' },
  ];

  const selectedCategory = categories.find((c) => c.value === category);

  return (
    <div>
      {editMode ? (
        <Select options={categories} value={selectedCategory} onChange={onValueChange} />
      ) : (
        <div>{category}</div>
      )}
    </div>
  );
}

RecipeCategory.propTypes = {
  editMode: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default RecipeCategory;
