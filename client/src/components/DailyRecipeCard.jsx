import PropTypes from 'prop-types';
import './DailyRecipeCard.css';

function DailyRecipeCard({ imgUrl, prepTime, name, rating }) {
  return (
    <div className="daily-body">
      <div className="daily-container">
        <div className="daily-card">
          <h2>{name}</h2>
          <img src={imgUrl} alt="" className="daily-card-image" />
          <div>
            <div className="daily-description">
              <div>{prepTime} min </div>
              <div> Rating ⭐ {rating} /5</div>
            </div>

            <button type="button1" className="daily-button">
              I want to Cook It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DailyRecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  prepTime: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default DailyRecipeCard;
