import PropTypes from 'prop-types';
import Select from 'react-select';
import { meals, desserts, beverages } from './navigation/NavArrays';
import Tooltips from './Tooltips';

function RecipeCategory({ editMode, category, setCategory, selectedMainCategory }) {
  const onValueChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  let options = [];

  if (selectedMainCategory === 'meals') {
    options = meals;
  } else if (selectedMainCategory === 'desserts') {
    options = desserts;
  } else if (selectedMainCategory === 'beverages') {
    options = beverages;
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
      <Tooltips title="Choose a category for your recipe">
        {editMode ? (
          <Select
            options={options}
            value={selectedCategory}
            onChange={onValueChange}
            styles={customStyles}
            placeholder="Select category"
          />
        ) : (
          <div className="hidden">{category}</div>
        )}
      </Tooltips>
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
