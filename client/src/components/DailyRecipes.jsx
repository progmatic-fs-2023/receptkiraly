import PropTypes from 'prop-types';
import DailyRecipeCard from './DailyRecipeCard';
import './DailyRecipeCard.css';

function DailyRecipes({ dailyRecipes }) {
  return (
    <div>
      <h1 className="daily-recipes"> Daily Recipes</h1>
      <div>
        {dailyRecipes.map((recipe) => (
          <DailyRecipeCard
            name={recipe.name}
            imgUrl={recipe.imgUrl}
            prepTime={recipe.prepTime}
            rating={recipe.rating}
          />
        ))}
      </div>
    </div>
  );
}

DailyRecipes.propTypes = {
  dailyRecipes: PropTypes.arrayOf.isRequired,
};
export default DailyRecipes;
