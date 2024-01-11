import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeCategory({ editMode, category, setCategory }) {
  const onValueChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const categories = [
    { value: 'Cake', label: 'Cake' },
    { value: 'Beer', label: 'Beer' },
    { value: 'Coffee', label: 'Coffee' },
    { value: 'Soup', label: 'Soup' },
  ];

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

  const selectedCategory = categories.find((c) => c.value === category);

  return (
    <div className="w-1/6">
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
