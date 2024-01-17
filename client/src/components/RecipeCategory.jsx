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

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #d2d6dc',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'normal',
      minHeight: '42px',

      boxShadow: state.isFocused ? '0 0 0 1px #5a8dee' : 'none',
      '&:hover': {
        boxShadow: '0 0 0 1px #d2d6dc',
        fontSize: '16px',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4b5563',
    }),
  };

  const selectedCategory = categories.find((c) => c.value === category);

  return (
    <div className="w-full">
      {editMode ? (
        <Select
          options={categories}
          value={selectedCategory}
          onChange={onValueChange}
          styles={customStyles}
        />
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
