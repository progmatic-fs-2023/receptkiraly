'use client';

import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Recipes from './pages/Recipes';
import { API_URL } from './constants';
import Fallback from './components/Fallback';

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
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route index element={<Recipes />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
