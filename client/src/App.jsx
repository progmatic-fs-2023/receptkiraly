import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import { API_URL } from './constants';

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
      <Routes>
        <Route index element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
