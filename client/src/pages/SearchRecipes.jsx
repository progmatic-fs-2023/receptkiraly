import RecipeCard from '../components/RecipeCard';

function SearchRecipes() {
  const recipesData = [
    {
      id: 1,
      imgUrl: '../images/food/scrambled_eggs.png',
      minutes: 30,
      difficulty: 'Easy',
      serves: 4,
      name: 'Scrambled Eggs',
    },
    {
      id: 2,
      imgUrl: '../images/food/spaghetti_bolognese.png',
      minutes: 45,
      difficulty: 'Easy',
      serves: 4,
      name: 'Spaghetti Bolognese',
    },
    {
      id: 3,
      imgUrl: '../images/food/plant_based_hamburger.png',
      minutes: 60,
      difficulty: 'Medium',
      serves: 4,
      name: 'Plant-based Hamburger',
    },
    {
      id: 4,
      imgUrl: '../images/food/strawberry_smoothie.png',
      minutes: 10,
      difficulty: 'Easy',
      serves: 4,
      name: 'Strawberry Smoothie',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            imgUrl={recipe.imgUrl}
            minutes={recipe.minutes}
            difficulty={recipe.difficulty}
            serves={recipe.serves}
            name={recipe.name}
          />
        ))}
      </div>
  );
}
export default SearchRecipes;
