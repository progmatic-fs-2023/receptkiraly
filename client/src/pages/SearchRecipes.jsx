import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeGrid from '../components/RecipeGrid';

function SearchRecipes() {
  const [recipesData, setRecipesData] = useState([]);

  // const recipesData = [
  //   {
  //     id: 1,
  //     imgUrl: '../images/food/scrambled_eggs.png',
  //     minutes: 30,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Scrambled Eggs',
  //   },
  //   {
  //     id: 2,
  //     imgUrl: '../images/food/spaghetti_bolognese.png',
  //     minutes: 45,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Spaghetti Bolognese',
  //   },
  //   {
  //     id: 3,
  //     imgUrl: '../images/food/plant_based_hamburger.png',
  //     minutes: 60,
  //     difficulty: 'Medium',
  //     serves: 4,
  //     name: 'Plant-based Hamburger',
  //   },
  //   {
  //     id: 4,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  //   {
  //     id: 5,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  //   {
  //     id: 6,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  //   {
  //     id: 7,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  //   {
  //     id: 8,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  //   {
  //     id: 9,
  //     imgUrl: '../images/food/strawberry_smoothie.png',
  //     minutes: 10,
  //     difficulty: 'Easy',
  //     serves: 4,
  //     name: 'Strawberry Smoothie',
  //   },
  // ];

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/recipes')
      .then((response) => {
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes data:', error);
      });
  }, []);

  console.log(recipesData);

  return (
    <section className="container mx-auto my-2">
      <SearchForm />
      <RecipeGrid>
        {recipesData.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            id={recipe.recipe_id}
            imgUrl={`../images/food/${recipe.recipe_img}`}
            minutes={recipe.recipe_time_minutes}
            difficulty={recipe.recipe_difficulty_level}
            serves={recipe.recipe_serve_count}
            name={recipe.recipe_name}
          />
        ))}
      </RecipeGrid>
    </section>
  );
}
export default SearchRecipes;
