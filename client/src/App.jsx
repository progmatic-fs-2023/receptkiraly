import './App.css';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import Login from './components/Login';
import { API_URL } from './constants';
=======
import SearchRecipes from './pages/SearchRecipes';
import NavigationBar from './components/NavigationBar';
import HomeNews from './pages/HomeNews';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
>>>>>>> 2e3577f (Change navbar)

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  return (
    <div>
      Hello project!
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <Login />
      <Routes>
<<<<<<< HEAD
        <Route index element={<Recipes />} />
=======
        <Route path="/" element={<HomeNews />} />
        <Route path="/recipesfeed" element={<RecipesFeed />} />
        <Route path="/searchrecipes" element={<SearchRecipes />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
>>>>>>> 2e3577f (Change navbar)
      </Routes>
    </div>
  );
}

export default App;
