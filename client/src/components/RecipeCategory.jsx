import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Select from 'react-select';
import { meals, desserts, beverages } from './navigation/NavArrays';

function RecipeCategory({ editMode, category, setCategory, selectedMainCategory }) {
  const onValueChange = (selectedOption) => {
    if (selectedOption) {
      setCategory(selectedOption.value);
    } else {
      setCategory('');
    }
  };

  const selectRef = useRef();

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.clearValue();
    }
  }, [selectedMainCategory]);

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
      {editMode ? (
        <Select
            ref={selectRef}
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
