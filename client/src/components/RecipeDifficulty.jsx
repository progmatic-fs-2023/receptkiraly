import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeDifficulty({ editMode, difficulty, setDifficulty }) {
  const onValueChange = (selectedOption) => {
    setDifficulty(selectedOption.value);
  };

  const difficulties = [
    { value: 1, label: 'Easy' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Hard' },
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

  const selectedDifficulty = difficulties.find((c) => c.value === difficulty);

  return (
    <div className="w-28 mt-4 mx-2">
      {editMode ? (
        <Select
          options={difficulties}
          value={selectedDifficulty}
          onChange={onValueChange}
          styles={customStyles}
        />
      ) : (
        <div>{difficulty}</div>
      )}
    </div>
  );
}

RecipeDifficulty.propTypes = {
  editMode: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

export default RecipeDifficulty;
