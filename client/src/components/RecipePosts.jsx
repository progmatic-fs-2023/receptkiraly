import PropTypes from 'prop-types';
import RecipePostsCard from './RecipePostsCard';

function RecipePosts({ recipePosts }) {
  return (
    <div>
      <h1 className="recipe-posts">Recipe Posts</h1>
      <div>
        {recipePosts.map((recipe) => (
          <RecipePostsCard
            name={recipe.name}
            imgUrl={recipe.imgUrl}
            description={recipe.description}
            tasteRating={recipe.tasteRating}
            visualRating={recipe.visualRating}
            iCockedIt={recipe.iCockedIt}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

RecipePosts.propTypes = {
  recipePosts: PropTypes.arrayOf.isRequired,
};

export default RecipePosts;
