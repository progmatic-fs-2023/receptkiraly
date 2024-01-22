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
  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false);
  const [myRecipes, setMyRecipes] = useState([]);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/user/recipes/`)
      .then((response) => {
        if (!response.ok) throw new Error('Recipes cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setMyRecipes(data);
      });
    fetch(`${API_URL}/user/`)
      .then((response) => {
        if (!response.ok) throw new Error('User cannot be fetched');
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <div>
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
                      <strong>Last Recipe name: </strong>
                      {myRecipes.length !== 0 ? myRecipes[0].recipe_name : 'No recipes yet'}
                    </p>
                    <p>
                      <strong>Registered at: </strong>
                      {convertIsoTimestampToDate(userData.registration_date)}
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
          {myRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.name}
              imgUrl={recipe.img}
              minutes={recipe.time_minutes}
              difficulty={recipe.difficulty_level}
              serves={recipe.serve_count}
              name={recipe.recipe_name}
              description={recipe.description}
              category={recipe.category_name}
              mainCategory={recipe.main_category_name}
              labels={recipe.label_name}
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
