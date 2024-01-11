import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [checkedTerm, setCheckedTerm] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const handleChangeTerm = (event) => {
    setCheckedTerm(event.target.checked);
  };
  const handleChangePrivacy = (event) => {
    setCheckedPrivacy(event.target.checked);
  };

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
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
        <div className="flex  m-4">
          <div className="flex items-center">
            <input
              onChange={handleChangeTerm}
              name="checked"
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <Link to="/termsofuse" className="hover:underline">
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <div className="flex items-center  my-2">
            <input
              onChange={handleChangePrivacy}
              name="checked"
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <Link to="/privacypolicy" className="hover:underline">
                privacy and policy
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="flex-row flex justify-center m-4">
          {' '}
          <button
            className={`text-white  border-0 py-2 px-8 focus:outline-none ${
              checkedTerm && checkedPrivacy ? 'hover:bg-indigo-600 bg-indigo-500' : 'bg-indigo-300'
            } rounded text-lg `}
            type="submit"
            disabled={!(checkedTerm && checkedPrivacy)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegistrationForm;
