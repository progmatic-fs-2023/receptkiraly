import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="app">
      <Banner />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeNews />} />
        <Route path="/recipesfeed" element={<RecipesFeed />} />
        <Route path="/searchrecipes" element={<SearchRecipes />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
