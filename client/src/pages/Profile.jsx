import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import UserData from '../components/UserData';
import MyRecipes from '../components/MyRecipes';
import NewRecipe from '../components/NewRecipe';

function Profile() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  return (
    <div>
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <div className="flex items-start">
        <div className="flex flex-grow flex-col justify-center items-center w-3/4">
        <MyRecipes />
        <NewRecipe />
        </div>
        <div className="w-1/4 bg-orange-300 p-4">
          <UserData />
        </div>
      </div>
    </div>
  );
}

export default Profile;
