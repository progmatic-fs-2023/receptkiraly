import PropTypes from 'prop-types';
import queryButtons from './RankingListQueryButtonsArray';

function RankingListQueryButtons({ queryCallback }) {
  function handleClick(queryValue) {
    queryCallback(queryValue);
  }
  const buttons = queryButtons;
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-x-5">
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
    </div>
  );
}

RankingListQueryButtons.propTypes = {
  queryCallback: PropTypes.func.isRequired,
};

export default RankingListQueryButtons;
