import PropTypes from 'prop-types';

function ExploreAllButton({ text }) {
  return (
    <div className="mt-6">
      <a
        className="block border-2 border-orange-400 font-semibold hover:bg-primary hover:bg-orange-400 hover:text-white py-3 px-8 rounded sm:inline-block text-orange-400 text-sm text-center uppercase"
        target="_self"
        title=""
        href="http://localhost:5173/searchrecipes"
      >
        <span>{text}</span>
      </a>
    </div>
  );
}

ExploreAllButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExploreAllButton;
