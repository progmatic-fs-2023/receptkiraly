'use client';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoginContext from './contexts/LoginContext';
import LoginDispatchContext from './contexts/LoginDispatchContext';
import './App.css';
import './components/RecipePostsCard.css';
import './components/DailyRecipeCard.css';
/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import Home from './pages/Home';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import Registration from './pages/Registration';
import NoPage from './pages/NoPages';
import Profile from './pages/Profile';
import Rankings from './pages/Rankings';
import About from './pages/About';
import NewRecipe from './pages/NewRecipe';
/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <LoginContext.Provider value={isLoggedIn}>
        <LoginDispatchContext.Provider value={setIsLoggedIn}>
          <header className="container mx-auto w-full">
            <Banner />
            <div className="flex justify-center">
              <NavigationBar />
            </div>
          </header>
          <img
            src="/images/meal.svg"
            alt="Meal Icon"
            className="absolute left-0 top-0 z-0 hidden sm:block"
          />
          <img
            src="/images/stirring.svg"
            alt="Meal Icon"
            className="absolute right-0 transform scale-y-[-1] top-0 z-0 hidden sm:block"
          />
          <main className="py-10">
            <ErrorBoundary FallbackComponent={Fallback}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipesfeed" element={<RecipesFeed />} />
                <Route path="/search" element={<SearchRecipes />} />
                <Route path="/battle" element={<Battle />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/rankings" element={<Rankings />} />
                <Route path="/postrecipe" element={<NewRecipe />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NoPage />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <footer className="relative z-0">
            <Footer />
          </footer>
        </LoginDispatchContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
