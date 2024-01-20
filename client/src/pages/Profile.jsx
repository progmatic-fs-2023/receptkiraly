import React, { useEffect, useState } from 'react';
import { Add } from '@mui/icons-material';
import { API_URL } from '../constants';
import InfoCard from '../components/InfoCard';
import RecipeGrid from '../components/RecipeGrid';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';
import DetailedRecipe from '../components/DetailedRecipe';
import convertIsoTimestampToDate from '../helpers';

function Profile() {
  const [isConnect, setIsConnect] = useState(false);
  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false);
  const [myRecipes, setMyRecipes] = useState([1, 2, 3, 4]);
  const [userData, setUserData] = useState({
    id: 'dummy1',
    username: 'dummy',
    user_email: 'john@example.com',
    user_password_hash: 'hashed_password_123',
    user_registration_date: '2024-01-13T23:00:00.000Z',
  });
  const userID = '5703d862-c54c-47dc-bfc7-911e242ca24a';
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
    fetch(`${API_URL}/user/${userID}`)
      .then((response) => {
        if (!response.ok) throw new Error('User cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setUserData(data);
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
    {
      id: 7,
      imgUrl: '../images/food/scrambled_eggs.png',
      minutes: 30,
      difficulty: 'Easy',
      serves: 4,
      name: 'Scrambled Eggs',
    },
    {
      id: 8,
      imgUrl: '../images/food/spaghetti_bolognese.png',
      minutes: 45,
      difficulty: 'Easy',
      serves: 4,
      name: 'Spaghetti Bolognese',
    },
    {
      id: 5,
      imgUrl: '../images/food/plant_based_hamburger.png',
      minutes: 60,
      difficulty: 'Medium',
      serves: 4,
      name: 'Plant-based Hamburger',
    },
    {
      id: 6,
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
      <div className="lg:w-3/5 mx-auto">
        <div className="w-full sm:w-3/4 flex-col sm:flex-row flex flex-wrap mx-auto">
          <div className="sm:w-1/2 w-full">
            <InfoCard title="Username's profile">
              <div className="flex w-full max-w-md bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex-1">
                  <div className="font-bold mb-1">Info</div>
                  <div className="text-sm">
                    <p>
                      <strong>User name: </strong>
                      {userData.username}
                    </p>
                    <p>
                      <strong>Recipes: </strong>
                      {myRecipes.length}
                    </p>
                    <p>
                      <strong>Last RecipeID: </strong>
                      {myRecipes[0]}
                    </p>
                    <p>
                      <strong>Registered at: </strong>
                      {convertIsoTimestampToDate(userData.user_registration_date)}
                    </p>
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
        <Modal
          title="Creating new recipe"
          addClassName="w-4/5"
          close={() => setCreatingNewRecipe(false)}
        >
          <DetailedRecipe editMode />
        </Modal>
      ) : null}
    </div>
  );
}

export default Profile;
