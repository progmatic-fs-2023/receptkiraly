'use client';

import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import HomeNews from './pages/HomeNews';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import RegistrationForm from './pages/Registration';
import NoPage from './pages/NoPages';
import Profile from './pages/Profile';
/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Banner />
      <NavigationBar />
      <ErrorBoundary FallbackComponent={Fallback}>
      <div className="lg:w-3/4 xl:w-4/5 mx-auto mt-2 mb-2">
        <Routes>
          <Route path="/" element={<HomeNews />} />
          <Route path="/recipesfeed" element={<RecipesFeed />} />
          <Route path="/searchrecipes" element={<SearchRecipes />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;