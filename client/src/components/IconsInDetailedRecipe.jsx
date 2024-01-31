import PropTypes from 'prop-types';
import Tooltips from './Tooltips';

function Icons({ editMode, minutes, setMinutes, serves, setServes, addClassName }) {
  const handleMinutesChange = (event) => {
    setMinutes(Number(event.target.value));
  };

  const handleServesChange = (event) => {
    setServes(Number(event.target.value));
  };

  return (
    <div className="flex flex-nowrap flex-row mt-4">
      <Tooltips title="Estimated cooking time (minutes)"><div className="flex flex-nowrap flex-row items-center">
        <img
          src="/images/time-icon.svg"
          className="h-[31px] w-[31px] grow-0 h-auto w-auto"
          alt="time-icon"
        />
        {editMode ? (
          <input
            type="number"
            min="0"
            className={`shadow-sm appearance-none border rounded mx-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
            value={minutes}
            onChange={handleMinutesChange}
            placeholder="Time"
          />
        ) : (
          <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
            {minutes} min
          </span>
        )}
      </div></Tooltips>

      <Tooltips title="Servings"><div className="flex flex-nowrap flex-row items-center">
        <img
          src="/images/serves-icon.svg"
          className="h-[31px] w-[31px] grow-0 h-auto w-auto"
          alt="serves-icon"
        />
        {editMode ? (
          <input
            type="number"
            min="0"
            className={`shadow-sm appearance-none border rounded mx-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
            value={serves}
            onChange={handleServesChange}
            placeholder="Servings"
          />
        ) : (
          <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
            {serves}
          </span>
        )}
      </div>
      </Tooltips>
    </div>
  );
}

Icons.propTypes = {
  editMode: PropTypes.bool.isRequired,
  minutes: PropTypes.number.isRequired,
  setMinutes: PropTypes.func.isRequired,
  serves: PropTypes.number.isRequired,
  setServes: PropTypes.func.isRequired,
  addClassName: PropTypes.string,
};
Icons.defaultProps = {
  addClassName: '',
};
export default Icons;
