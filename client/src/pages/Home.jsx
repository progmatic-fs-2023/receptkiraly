import { useEffect, useState } from 'react';
import { Add } from '@mui/icons-material';
import { API_URL } from '../constants';

import SwiperComponent from '../components/SwiperComponent';
import RecipeCard from '../components/RecipeCard';
import Carousel from '../components/Carousel';
import RecipeKingCard from '../components/RecipeKingCard';
import DetailedRecipe from '../components/DetailedRecipe';
import Modal from '../components/Modal';

function Home() {
  const [isConnect, setIsConnect] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([{}, {}]);
  const [allRecipes, setAllRecipes] = useState([{}, {}]);
  const countRecipesShown = 6;
  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
    fetch(`${API_URL}/recipes/latest/${countRecipesShown}`)
      .then((response) => {
        if (!response.ok) throw new Error('Latest recipe cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setLatestRecipes(data);
      });
    fetch(`${API_URL}/recipes`)
      .then((response) => {
        if (!response.ok) throw new Error('Latest recipe cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setAllRecipes(data);
      });
  }, []);

  const nRandomRecipes = (n, recipes, condition) =>
    recipes
      .filter((recipe) => condition(recipe))
      .sort(() => 0.5 - Math.random())
      .slice(0, n);

  const [isCreateRecipe, setISCreateRecipe] = useState(false);

  return (
    <div>
      <div>
        <img src="/images/banner-v2.png" alt="Banner" className="w-full relative z-10" />
      </div>
      <div className="container mx-auto my-2">
        <div>
          Hello project!
          <ul>
            <li>
              {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className=" flex text-center justify-center items-center basis-2/6 ">
            <div>
              <RecipeKingCard />
            </div>
          </div>

          <div className=" flex basis-2/6 border-x">
            <div className="m-auto">
              <div className="text-center ">
                <h2 className="text-4xl text-orange-400 tracking-widest font-medium title-font mb-5">
                  Post Recipes
                </h2>

                <div>
                  <div className="flex w-full max-w-md bg-gray-100 p-4 rounded-lg shadow mb-4">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="mx-auto scale-150 hover:text-orange-400">
                          <button
                            aria-label="Click this to add a new recipe"
                            type="button"
                            onClick={() => setISCreateRecipe(true)}
                          >
                            <Add />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {isCreateRecipe ? (
                      <Modal
                        title="Create New Recipes"
                        addClassName="w-4/5"
                        close={() => setISCreateRecipe(false)}
                      >
                        <DetailedRecipe editMode />
                      </Modal>
                    ) : null}
                  </div>
                </div>

                <p className="leading-relaxed text-base">and be the &quot;Recipe King&quot;</p>
              </div>
            </div>
          </div>

          <div className=" basis-2/6">
            <div className="flex justify-center ">
              <div className="">
                <Carousel title="Latest recipes">
                  {latestRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.recipe_name}
                      imgUrl={recipe.img}
                      minutes={recipe.time_minutes}
                      difficulty={recipe.difficulty_level}
                      serves={recipe.serve_count}
                      name={recipe.recipe_name}
                      description={recipe.description}
                      category={recipe.category_name}
                      mainCategory={recipe.main_category_name}
                      labels={recipe.label_name}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <SwiperComponent title="Meals">
              {nRandomRecipes(
                countRecipesShown,
                allRecipes,
                (recipe) => recipe.main_category_name === 'meals',
              ).map((recipe) => (
                <RecipeCard
                  key={recipe.recipe_name}
                  imgUrl={recipe.img}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                />
              ))}
            </SwiperComponent>
            <SwiperComponent title="Desserts">
              {nRandomRecipes(
                countRecipesShown,
                allRecipes,
                (recipe) => recipe.main_category_name === 'desserts',
              ).map((recipe) => (
                <RecipeCard
                  key={recipe.recipe_name}
                  imgUrl={recipe.img}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                />
              ))}
            </SwiperComponent>
            <SwiperComponent title="Beverages">
              {nRandomRecipes(
                countRecipesShown,
                allRecipes,
                (recipe) => recipe.main_category_name === 'beverages',
              ).map((recipe) => (
                <RecipeCard
                  key={recipe.recipe_name}
                  imgUrl={recipe.img}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                />
              ))}
            </SwiperComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
