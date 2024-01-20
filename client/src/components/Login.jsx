import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Login({ setIsAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setLoginMessage(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        setLoginMessage('Bejelentkeztél ✅');
        setIsAuthenticated(true);
      } else if (response.status === 401) {
        setLoginMessage('Rossz név/jelszó ❗️');
      } else {
        setLoginMessage('Egyéb ❗️');
      }
    } catch (error) {
      setLoginMessage('technikai hiba ❗️');
    }
  };

  return (
    <div className="relative inline-block z-10">
      <Button type="button" text="Sign In" onClick={handleToggle} />
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white p-4 border rounded shadow-md">
          <form onSubmit={handleLogin}>
            <label htmlFor="username" className="block mb-2">
              Username:
              <input
                type="text"
                name="username"
                className="border p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="block mb-2">
              Password:
              <input
                type="password"
                name="password"
                className="border p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="flex flex-col items-center justify-between">
              <Button type="submit" text="Sign In" />
            </div>
          </form>
          {loginMessage && <p>{loginMessage}</p>}
        </div>
      )}
    </div>
  );
}

Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
