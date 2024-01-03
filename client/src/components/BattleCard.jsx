import PropTypes from 'prop-types';

function BattleCard({ imageLeftUrl, imageRightUrl, title, description }) {
  return (
    <a
      href="/"
      className="flex flex-col items-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 justify-between"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imageLeftUrl}
        alt=""
      />
      <div className="flex flex-col justify-center p-4 leading-normal text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg"
        src={imageRightUrl}
        alt=""
      />
    </a>
  );
}

BattleCard.propTypes = {
  imageLeftUrl: PropTypes.string.isRequired,
  imageRightUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BattleCard;
