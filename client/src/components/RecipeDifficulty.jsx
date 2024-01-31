import PropTypes from 'prop-types';
import Select from 'react-select';

function RecipeDifficulty({ editMode, difficulty, setDifficulty }) {
  const onValueChange = (selectedOption) => {
    setDifficulty(Number(selectedOption.value));
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
    <div className="mt-4">
      {editMode ? (
        <Select
          options={difficulties}
          value={selectedDifficulty}
          onChange={onValueChange}
          styles={customStyles}
        />
      ) : (
        <div className="flex flex-nowrap flex-row text-[12px] leading-[18px] h5 uppercase whitespace-nowrap"><img src="/images/difficulty-icon.svg" className="h-[31px] w-[31px] grow-0 h-auto w-auto mr-1" alt="Difficulty" />{selectedDifficulty.label}</div>
      )}
    </div>
  );
}

RecipeDifficulty.propTypes = {
  editMode: PropTypes.bool.isRequired,
  difficulty: PropTypes.number.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

export default RecipeDifficulty;
