import PropTypes from 'prop-types';

function LikeBadge({ likeCount, isStart }) {
  return (
    <div>
      {isStart ? (
        <>
          <div className="hidden md:block mb-3 font-normal text-gray-700 dark:text-gray-400 py-1 translate-x-[-60px]">
            <span className="bg-white p-0.5 rounded">100 🩷</span>
          </div>
          <div className="relative">
            <span className="md:hidden absolute top-80 w-16 text-center right-2 bg-white p-0.5 rounded">
              {`${likeCount} 🩷`}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block mb-3 font-normal text-gray-700 dark:text-gray-400 py-1 translate-x-[60px]">
            <span className="bg-white p-0.5 rounded">100 🩷</span>
          </div>
          <div className="relative">
            <span className="md:hidden absolute top-8 w-16 text-center left-2 bg-white p-0.5 rounded">
              {`${likeCount} 🩷`}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

LikeBadge.propTypes = {
  likeCount: PropTypes.number.isRequired,
  isStart: PropTypes.bool.isRequired,
};

export default LikeBadge;
