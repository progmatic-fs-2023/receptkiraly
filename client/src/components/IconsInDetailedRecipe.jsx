import PropTypes from 'prop-types';

function Icons({ editMode, minutes, setMinutes, difficulty, setDifficulty, serves, setServes }) {
  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleServesChange = (event) => {
    setServes(event.target.value);
  };

  return (
    <div className="hidden sm:block mt-4">
      <div className="flex sm:flex-wrap justify-center">
        <div className="flex items-center opacity-60">
          <img
            src="/images/time-icon.svg"
            className="h-[31px] w-[31px] grow-0 h-auto w-auto"
            alt="time-icon"
          />
          {editMode ? (
            <input
              type="text"
              className="pl-2 border-solid border-4 border-orange-500 text-[25px] leading-[18px] ml-[10px] mr-[20px] h5 uppercase whitespace-nowrap m-2"
              value={minutes}
              onChange={handleMinutesChange}
              placeholder="How many minutes?"
            />
          ) : (
            <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
              {minutes}
            </span>
          )}
        </div>

        <div className="flex items-center opacity-60">
          <img
            src="/images/difficulty-icon.svg"
            className="h-[31px] w-[31px] grow-0 h-auto w-auto"
            alt="difficulty-icon"
          />
          {editMode ? (
            <input
              type="text"
              className="pl-2 border-solid border-4 border-orange-500 text-[25px] leading-[18px] ml-[10px] mr-[20px] h5 uppercase whitespace-nowrap m-2"
              value={difficulty}
              onChange={handleDifficultyChange}
              placeholder="How hard?"
            />
          ) : (
            <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
              {difficulty}
            </span>
          )}
        </div>

        <div className="flex items-center opacity-60">
          <img
            src="/images/serves-icon.svg"
            className="h-[31px] w-[31px] grow-0 h-auto w-auto"
            alt="serves-icon"
          />
          {editMode ? (
            <input
              type="text"
              className="pl-2 border-solid border-4 border-orange-500 text-[25px] leading-[18px] ml-[10px] mr-[20px] h5 uppercase whitespace-nowrap m-2"
              value={serves}
              onChange={handleServesChange}
              placeholder="For how many?"
            />
          ) : (
            <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
              {serves}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

Icons.propTypes = {
  editMode: PropTypes.bool.isRequired,
  minutes: PropTypes.number.isRequired,
  setMinutes: PropTypes.bool.isRequired,
  difficulty: PropTypes.number.isRequired,
  setDifficulty: PropTypes.bool.isRequired,
  serves: PropTypes.number.isRequired,
  setServes: PropTypes.bool.isRequired,
};

export default Icons;
