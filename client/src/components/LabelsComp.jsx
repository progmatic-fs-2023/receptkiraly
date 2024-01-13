import PropTypes from 'prop-types';
import Select from 'react-select';

function LabelsComp({ editMode, selectedOptions, setSelectedOptions }) {
  const selectOption = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'nut-free', label: 'Nut-free' },
    { value: 'egg-free', label: 'Egg-free' },
    { value: 'dairy-free', label: 'Dairy-free' },
    { value: 'gluten-free', label: 'Gluten-free' },
    { value: 'low-carb', label: 'Low-carb' },
    { value: 'spicy', label: 'Spicy' },
    { value: 'alcoholic', label: 'Alcoholic' },
    { value: 'non-alcoholic', label: 'Non-alcoholic' },
    { value: 'seafood', label: 'Seafood' },
  ];

  const handleSelectChange = (selectedOptionsValue) => {
    const selectedLabelValues = [];

    for (let i = 0; i <= selectedOptionsValue.length - 1; i += 1) {
      selectedLabelValues.push(selectedOptionsValue[i].value);
    }
    setSelectedOptions(selectedLabelValues);
  };

  const customStyles = {
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
      background: '#172554',
      fontSize: '20px',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      background: 'orange',
      ':hover': {
        background: 'red',
      },
    }),
    input: (provided) => ({
      ...provided,
      fontSize: '20px',
    }),
  };

  return (
    <div className="flex-grow">
      {editMode ? (
        <Select
          isMulti
          name="colors"
          options={selectOption}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelectChange}
          styles={customStyles}
        />
      ) : (
        <div className="flex">
          {selectedOptions.map((label) => (
            <div className="m-1 p-1 border-solid border-2 border-orange-400 rounded-lg">
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

LabelsComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
};

export default LabelsComp;
