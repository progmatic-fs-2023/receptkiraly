import { useEffect, useState } from 'react';
import { API_URL, HOST_PORT_URL } from '../constants';
import SwiperComponent from '../components/SwiperComponent';
import RecipeCard from '../components/RecipeCard';
import Carousel from '../components/Carousel';
import RecipeKingCard from '../components/RecipeKingCard';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';
import useRecipeCardModal from '../hooks/useRecipeCardModal';

function Home() {
  const [isConnect, setIsConnect] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([{}, {}]);
  const [allRecipes, setAllRecipes] = useState([{}, {}]);
  const countRecipesShown = 6;

  const { stateObject, closeModal, openModal, isModalOpen, selectedRecipe } = useRecipeCardModal();

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
                <h2 className="text-xs text-orange-400 tracking-widest font-medium title-font mb-1">
                  Recipe King
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Find recipes
                </h1>
                <p className="leading-relaxed text-base">and meet the &quot;Recipe King&quot;</p>
              </div>
            </div>
          </div>

          <div className=" basis-2/6">
            <div className="flex justify-center ">
              <div className="">
                <Carousel title="Latest recipes">
                  {latestRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      id={recipe.id}
                      imgUrl={`${HOST_PORT_URL}/${recipe.img}`}
                      minutes={recipe.time_minutes}
                      difficulty={recipe.difficulty_level}
                      serves={recipe.serve_count}
                      name={recipe.name}
                      openModal={openModal}
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
                  id={recipe.id}
                  key={recipe.recipe_name}
                  imgUrl={`${HOST_PORT_URL}/${recipe.img}`}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                  openModal={openModal}
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
                  id={recipe.id}
                  key={recipe.recipe_name}
                  imgUrl={`${HOST_PORT_URL}/${recipe.img}`}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                  openModal={openModal}
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
                  id={recipe.id}
                  key={recipe.recipe_name}
                  imgUrl={`${HOST_PORT_URL}/${recipe.img}`}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.recipe_name}
                  description={recipe.description}
                  category={recipe.category_name}
                  mainCategory={recipe.main_category_name}
                  labels={recipe.label_name}
                  openModal={openModal}
                />
              ))}
            </SwiperComponent>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal title="Detailed Recipe" close={closeModal} addClassName="max-w-7xl">
          <DetailedRecipe recipeID={selectedRecipe} stateObject={stateObject} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
