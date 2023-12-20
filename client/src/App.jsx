
'use client';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import SearchRecipes from './pages/SearchRecipes';
import NavigationBar from './components/NavigationBar';
import HomeNews from './pages/HomeNews';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import Login from './components/Login';
import NoPage from './pages/NoPages';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Fallback from './components/Fallback';

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
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
