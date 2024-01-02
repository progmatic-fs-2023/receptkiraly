import PropTypes from 'prop-types';
import queryButtons from './RankingListQueryButtonsArray';

function RankingListQueryButtons({ queryCallback }) {
  function handleClick(query) {
    queryCallback(query);
  }
  const buttons = queryButtons;
  return (
    <>
      {buttons.map(({ key, label, value }) => (
        <button
          key={key}
          onClick={() => handleClick(value)}
          value={value}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {label}
        </button>
      ))}
    </>
  );
}

RankingListQueryButtons.propTypes = {
  queryCallback: PropTypes.func.isRequired,
};

export default RankingListQueryButtons;
