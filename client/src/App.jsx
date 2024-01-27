'use client';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoginContext from './contexts/LoginContext';
import LoginDispatchContext from './contexts/LoginDispatchContext';
import './App.css';

/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import Home from './pages/Home';

import Registration from './pages/Registration';
import NoPage from './pages/NoPages';
import Profile from './pages/Profile';

import NewRecipe from './pages/NewRecipe';
import About from './pages/About';
/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/Footer';
import { API_URL } from './constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const revalidateLogin = () => {
    fetch(`${API_URL}/login`, {
      method: 'PATCH',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else if (response.status === 401) {
          throw new Error('Not logged in');
        } else {
          throw new Error(response.body);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  };
  useEffect(revalidateLogin, []);

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

                <Route path="/search" element={<SearchRecipes />} />

                <Route path="/register" element={<Registration />} />
                <Route path="/profile" element={<Profile />} />

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
