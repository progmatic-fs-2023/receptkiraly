'use client';

import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

/* Navbar pages */
import SearchRecipes from './pages/SearchRecipes';
import Home from './pages/Home';

import Registration from './pages/Registration';
import NoPage from './pages/NoPages';
import Profile from './pages/Profile';

/* Template */
import Banner from './components/Banner';
import Fallback from './components/Fallback';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
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
      <main>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/search" element={<SearchRecipes />} />

            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/*" element={<NoPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <footer className="relative z-50">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
