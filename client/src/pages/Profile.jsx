import React, { useEffect, useState } from 'react';
import { Add } from '@mui/icons-material';
import { API_URL } from '../constants';
import InfoCard from '../components/InfoCard';
import RecipeGrid from '../components/RecipeGrid';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';

function Profile() {
  const [isConnect, setIsConnect] = useState(false);
  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false);
  const [myRecipes, setMyRecipes] = useState([1, 2, 3, 4]);
  const userID = 5;
  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
    fetch(`${API_URL}/user/${userID}/recipes/`)
      .then((response) => {
        if (!response.ok) throw new Error('Recipes cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setMyRecipes(data.ids);
      });
  }, []);

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
    <div>
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <div className="xxl:w-1/5 xl:w-2/5 lg:w-3/5 mx-auto">
        <div className="w-full sm:w-3/4 flex-col sm:flex-row flex flex-wrap mx-auto">
          <div className="sm:w-1/2 w-full">
            <InfoCard title="Username's profile">
              <div className="flex w-full max-w-md bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex-1">
                  <div className="font-bold mb-1">Info</div>
                  <div className="text-sm">
                    <p>User ID: 0</p>
                    <p>Recipes: 0</p>
                    <p>Last Recipe: None</p>
                    <p>Registered at: None</p>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className="sm:w-1/2 w-full">
            <InfoCard title="Add new recipe">
              <div className="flex w-full max-w-md bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="mx-auto scale-150 hover:text-orange-400">
                      <button
                        aria-label="Click this to add a new recipe"
                        type="button"
                        onClick={() => setCreatingNewRecipe(true)}
                      >
                        <Add />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <h1>My recipes</h1>
        <RecipeGrid>
          {myRecipes.map((recipe, index) => (
            <RecipeCard
              key={recipe}
              id={recipe}
              imgUrl={recipesData[index].imgUrl}
              minutes={recipesData[index].minutes}
              difficulty={recipesData[index].difficulty}
              serves={recipesData[index].serves}
              name={recipesData[index].name}
              actions
            />
          ))}
        </RecipeGrid>
      </div>
      {creatingNewRecipe ? (
        <Modal title="Creating new recipe" close={() => setCreatingNewRecipe(false)}>
          <DetailedRecipe editMode />
        </Modal>
      ) : null}
    </div>
  );
}

export default Profile;
