import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes.jsx';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  // useEffect(() => {
  //   fetch(`${API_URL}`).then((response) => {
  //     if (response.ok) setIsConnect(true);
  //   });
  // }, []);

  useEffect(() => {
    console.log(isConnect);
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
