import PropTypes from 'prop-types';
import '../App.css';

function NewsItem({ id, columnName, title, headline }) {
  return (
    <article id={id}>
      <div>
        <h6 className="text-1xl font-medium text-gray-500 dark:text-white">{columnName}</h6>
        <h3 className="text-2xl font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm	">{headline}</p>
      </div>
    </article>
  );
}

NewsItem.propTypes = {
  id: PropTypes.number.isRequired,
  columnName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default NewsItem;
