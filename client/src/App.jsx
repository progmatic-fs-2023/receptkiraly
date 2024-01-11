'use client';

import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import './components/RecipePostsCard.css';
import './components/DailyRecipeCard.css';
/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import Home from './pages/Home';
import RecipesFeed from './pages/RecipesFeed';
import Battle from './pages/Battle';
import RegistrationForm from './pages/Registration';
import NoPage from './pages/NoPages';
import Profile from './pages/Profile';
import Rankings from './pages/Rankings';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header className="container mx-auto">
        <Banner />
        <div className="flex justify-center">
          <NavigationBar />
        </div>
        </header>
        <main className="container mx-auto my-2">
        <ErrorBoundary FallbackComponent={Fallback}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipesfeed" element={<RecipesFeed />} />
              <Route path="/search" element={<SearchRecipes />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/rankings" element={<Rankings />} />
              <Route path="/*" element={<NoPage />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
            </Routes>
        </ErrorBoundary>
        </main>
      <Footer />
    </div>
  );
}

export default App;
