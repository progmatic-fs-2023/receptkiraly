'use client';

import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import HomeNews from './pages/HomeNews';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import NoPage from './pages/NoPages';
/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Banner />
      <NavigationBar />
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path="/" element={<HomeNews />} />
          <Route path="/recipesfeed" element={<RecipesFeed />} />
          <Route path="/searchrecipes" element={<SearchRecipes />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
