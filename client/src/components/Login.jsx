import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
    <div className="relative inline-block">
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
        onClick={handleToggle}
      >
        Login
      </button>
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
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Login/Sign In
              </button>
              <Link to="/register" className="text-blue-500 hover:underline">
                Registration/Sign Up
              </Link>
            </div>
          </form>
          {loginMessage && <p>{loginMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default Login;