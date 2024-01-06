import PropTypes from 'prop-types';

function RankingQueryResultItem({ queryValue, img, name, description, score, reviews, rank }) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 rounded-xl shadow-md p-3 max-w-xs md:max-w-3xl mt-5 mx-0 border border-darkgrey bg-neutral-100">
        <div className="w-full md:w-1/3 bg-neutral-100 grid place-items-center">
          <img src={img} alt="tailwind logo" className="rounded-xl" />
        </div>
        <div className="w-full md:w-2/3 bg-neutral-100 flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">{queryValue}</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                {score}
                <span className="text-gray-500 font-normal">({reviews} reviews)</span>
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Rank: {rank}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">{name}</h3>
          <p className="md:text-lg text-gray-500 text-base">{description}</p>
          {/* Labeleket itt lehet szerkeszteni */}
          <div>
            <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
              <div className="mt-px">green</div>
            </div>
            <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-black">
              <div className="mt-px">amber</div>
            </div>
            <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
              <div className="mt-px">red</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RankingQueryResultItem.propTypes = {
  queryValue: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};
export default RankingQueryResultItem;
