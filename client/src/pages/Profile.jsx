import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import InfoCard from '../components/InfoCard';
import RecipeGrid from '../components/RecipeGrid';
import RecipeCard from '../components/RecipeCard';
import { Add } from '@mui/icons-material';

function Profile() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
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
                      <Add></Add>
                    </div>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <RecipeGrid>
          {recipesData.map((recipe) => (
            <>
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                imgUrl={recipe.imgUrl}
                minutes={recipe.minutes}
                difficulty={recipe.difficulty}
                serves={recipe.serves}
                name={recipe.name}
                actions={true}
              />
            </>
          ))}
        </RecipeGrid>
      </div>
    </div>
  );
}

export default Profile;
