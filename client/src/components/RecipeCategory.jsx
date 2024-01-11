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
