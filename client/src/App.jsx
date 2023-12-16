import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import RegistrationForm from './pages/Registration';
import { API_URL } from './constants';

function App() {
  const [isConnect, setIsConnect] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegistrationButtonClick = () => {
    setShowRegistrationForm(true);
  };

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
      {!showRegistrationForm ? (
        <button type="button" onClick={handleRegistrationButtonClick}>
          Registration
        </button>
      ) : (
        <RegistrationForm />
      )}
      <Routes>
        <Route index element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
