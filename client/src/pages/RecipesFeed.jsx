// import { useState, useEffect } from 'react';
// import RecipeCard from '../components/RecipeCard';
// import { API_URL } from '../constants';
import DailyRecipes from '../components/DailyRecipes';
import RecipePosts from '../components/RecipePosts';

// dummy array for DailyRecipe page/components
const recommendedDailyRecipes = [
  {
    id: 1,
    name: 'Sajt',
    prepTime: 30,
    rating: 4.8,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
  },
  {
    id: 2,
    name: 'Sonka',
    prepTime: 30,
    rating: 4.8,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
  },
  {
    id: 3,
    name: 'Saláta',
    prepTime: 30,
    rating: 4.8,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
  },
];

// dummy array for RecipePosts page/components
const recommendedRecipesPosts = [
  {
    id: 1,
    name: 'Banán',
    prepTime: '30 min',
    visualRating: 4.8,
    tasteRating: 3.9,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
    ingredients: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi fugit perspiciatis incidunt unde sit debitis corrupti qui, pariatur ipsam praesentium, a dolor ipsum porro laudantium ex asperiores esse animi sint repellendus minima mollitia. Iusto perspiciatis at maiores cumque blanditiis, in reprehenderit, sequi nulla sint explicabo a minus expedita voluptatum?',
    iCookedIt: true,
  },
  {
    id: 2,
    name: 'Alma',
    prepTime: '30 min',
    visualRating: 4.8,
    tasteRating: 3.9,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
    ingredients: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptas repellat sed labore facere omnis. Nostrum maiores voluptas maxime magnam quis asperiores optio id ipsam, pariatur eius. Aut, distinctio rem repudiandae aspernatur voluptas, aliquam quo, corrupti eveniet in sunt nisi?',
    iCookedIt: false,
  },
  {
    id: 3,
    name: 'Körte',
    prepTime: '30 min',
    visualRating: 4.8,
    tasteRating: 3.9,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
    ingredients: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam cupiditate voluptatibus. Dolores voluptates expedita, provident, nam voluptate facere saepe labore, qui officia quibusdam quaerat!',
    iCookedIt: true,
  },
  {
    id: 4,
    name: 'Körte',
    prepTime: '30 min',
    visualRating: 4.8,
    tasteRating: 3.9,
    imgUrl: 'https://picsum.photos/300/300?grayscale',
    ingredients: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur facilis veniam enim optio? Amet quibusdam sint possimus est numquam voluptate sequi, nobis in pariatur aliquid debitis eius officia reprehenderit nostrum modi natus ad ducimus, eveniet dolore praesentium, eos beatae nesciunt! Recusandae, placeat ullam amet harum facere consequatur ad vero? Dolore sapiente ipsa id cumque.',
    iCookedIt: true,
  },
];

function RecipesFeed() {
  /* {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      const fetchRecipes = async () => {
        const response = await fetch(`${API_URL}/recipes`);
        const data = await response.json();
        setRecipes(data);
      };
      fetchRecipes();
    }, []);
  } */

  return (
    <div className="background">
      <div>
        <RecipePosts recipePosts={recommendedRecipesPosts} />
      </div>
      <div>
        {/* {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />
       ))} */}
      </div>
      <div>
        <DailyRecipes dailyRecipes={recommendedDailyRecipes} />
      </div>
    </div>
  );
}
export default RecipesFeed;
