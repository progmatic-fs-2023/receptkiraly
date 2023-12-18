import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isOpen, panelIsOpen] = useState(false);

  const handleToggle = () => {
    panelIsOpen(!isOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative inline-block">
      <button type="button" 
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
              <input type="text" name="username" className="border p-2" />
            </label>
            <label htmlFor="password" className="block mb-2">
              Password:
              <input type="password" name="password" className="border p-2" />
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
        </div>
      )}
    </div>
  );
};

export default Login;