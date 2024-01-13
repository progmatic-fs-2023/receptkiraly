import SearchForm from '../components/SearchForm';
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
    <section>
      <div className="bg-orange-400 relative z-0">
      <img src="/images/meal-2.svg" alt="Meal Icon" className="absolute left-0 top-0 h-40 transform scale-x-[-1] z-0"/>
      <img src="/images/top-orange.svg" alt="Meal Icon" className="absolute right-0 top-0 z-0"/>
      <h1 className="relative p-8 text-5xl text-white z-20">Search</h1>
      </div>
      <SearchForm />
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
    </section>
  );
}
export default SearchRecipes;