import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationMessage('Registration successful!');
      } else {
        setRegistrationMessage(data.error);
      }
    } catch (err) {
      setRegistrationMessage('An error occurred during registration.');
    }
  };

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label className="leading-7 text-sm text-gray-600" htmlFor="username">
          Username:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="leading-7 text-sm text-gray-600" htmlFor="email">
          Email:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="leading-7 text-sm text-gray-600" htmlFor="password">
          Password:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>

        {registrationMessage && <div>{registrationMessage}</div>}

        <button
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;
