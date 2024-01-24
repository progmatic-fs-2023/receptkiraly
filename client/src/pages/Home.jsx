import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import SwiperComponent from '../components/SwiperComponent';
import RecipeCard from '../components/RecipeCard';
import Carousel from '../components/Carousel';
import RecipeKingCard from '../components/RecipeKingCard';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';

function Home() {
  const [isConnect, setIsConnect] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([{}, {}]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // States for DetailedRecipe
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState();
  const [minutes, setMinutes] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [serves, setServes] = useState('');
  const [category, setCategory] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [, setErrorMessage] = useState();

  const stateObject = {
    title: {
      value: recipeTitle,
      setter: setRecipeTitle,
    },
    description: {
      value: description,
      setter: setDescription,
    },
    image: {
      value: imgUrl,
      setter: setImgUrl,
    },
    time: {
      value: minutes,
      setter: setMinutes,
    },
    difficulty: {
      value: difficulty,
      setter: setDifficulty,
    },
    serves: {
      value: serves,
      setter: setServes,
    },
    category: {
      value: category,
      setter: setCategory,
    },
    mainCategory: {
      value: selectedMainCategory,
      setter: setSelectedMainCategory,
    },
    labels: {
      value: selectedOptions,
      setter: setSelectedOptions,
    },
    ingredients: {
      value: ingredients,
      setter: setIngredients,
    },
  };
  // ------------------- End of the Detailed Recipe States

  // Modal functions
  const openModal = async (id) => {
    setSelectedRecipe(id);
    setModalOpen(true);

    try {
      // console.log(`Recipe ID search URL: http://localhost:3000/api/recipes/${id}`);
      const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
      const recipe = await response.json();

      setRecipeTitle(recipe.recipe_name);
      setDescription(recipe.description);
      setImgUrl(recipe.img);
      setMinutes(recipe.time_minutes);
      setDifficulty(recipe.difficulty_level);
      setServes(recipe.serve_count);
      setCategory(recipe.category_name);
      setSelectedMainCategory(recipe.main_category_name);
      setSelectedOptions(recipe.label_name);

      // console.log(recipe);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  // ---------------------------

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
    fetch(`${API_URL}/recipes/latest/5`)
      .then((response) => {
        if (!response.ok) throw new Error('Latest recipe cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setLatestRecipes(data);
      });
  }, []);

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
                      imgUrl={`http://localhost:3000/${recipe.img}`}
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
            <SwiperComponent title="Most Popular">
              {latestRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  imgUrl={`http://localhost:3000/${recipe.img}`}
                  minutes={recipe.time_minutes}
                  difficulty={recipe.difficulty_level}
                  serves={recipe.serve_count}
                  name={recipe.name}
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
