import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeCategory({ editMode, category, setCategory, selectedMainCategory }) {
  const onValueChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const mealsCategories = [
    { value: 'Appetizers', label: 'Appetizers' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
  ];

  const dessertsCategories = [
    { value: 'Cakes', label: 'Cakes' },
    { value: 'Frozen Desserts', label: 'Frozen Desserts' },
    { value: 'Chocolate and Candies', label: 'Chocolate and Candies' },
    { value: 'Fruit Desserts', label: 'Fruit Desserts' },
  ];

  const beveragesCategories = [
    { value: 'Hot Drinks', label: 'Hot Drinks' },
    { value: 'Cold Drinks', label: 'Cold Drinks' },
    { value: 'Soft Drinks', label: 'Soft Drinks' },
    { value: 'Juices', label: 'Juices' },
    { value: 'Smoothies', label: 'Smoothies' },
  ];

  let options = [];

  if (selectedMainCategory === 'meals') {
    options = mealsCategories;
  } else if (selectedMainCategory === 'desserts') {
    options = dessertsCategories;
  } else if (selectedMainCategory === 'beverages') {
    options = beveragesCategories;
  }

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

  const selectedCategory = options.find((c) => c.value === category);

  return (
    <div className="w-full">
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
