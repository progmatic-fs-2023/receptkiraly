import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeCategory({ editMode, category, setCategory, selectedMainCategory }) {
  const onValueChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const mealsCategories = [
    { value: 'appetizers', label: 'Appetizers' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
  ];

  const dessertsCategories = [
    { value: 'cakes', label: 'Cakes' },
    { value: 'frozen_desserts', label: 'Frozen Desserts' },
    { value: 'chocolate_and_candies', label: 'Chocolate and Candies' },
    { value: 'fruit_desserts', label: 'Fruit Desserts' },
  ];

  const beveragesCategories = [
    { value: 'hot_drinks', label: 'Hot Drinks' },
    { value: 'cold_drinks', label: 'Cold Drinks' },
    { value: 'soft_drinks', label: 'Soft Drinks' },
    { value: 'juices', label: 'Juices' },
    { value: 'smoothies', label: 'Smoothies' },
  ];

  let options = null;

  if (selectedMainCategory === 'Meals') {
    options = mealsCategories;
  } else if (selectedMainCategory === 'Desserts') {
    options = dessertsCategories;
  } else if (selectedMainCategory === 'Beverages') {
    options = beveragesCategories;
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '3px solid #ff8811',
      fontSize: '20px',
      fontWeight: 'bold',

      boxShadow: state.isFocused ? '0 0 0 1px #5a8dee' : 'none',
      '&:hover': {
        boxShadow: '0 0 0 1px #ff8822',
        fontSize: '20px',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  const selectedCategory = options.find((c) => c.value === category);

  return (
    <div className="w-1/6">
      {editMode ? (
        <Select
          options={options}
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
  selectedMainCategory: PropTypes.string.isRequired,
};

export default RecipeCategory;
