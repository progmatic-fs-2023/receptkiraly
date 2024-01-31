import { useState } from 'react';
import { API_URL } from '../constants';
import Modal from '../components/Modal';
import Button from '../components/Button';
import PrivacyAndPolicy from '../components/PrivacyAndPolicy';
import TermsOfUse from '../components/TermsOfUse';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

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
      const response = await fetch(`${API_URL}/register`, {
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
            type="password"
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
              id="termsId"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="termsId"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <button
                type="button"
                className="underline text-blue-500 hover:opacity-80 focus:outline-none"
                onClick={() => setShowPrivacyPolicy(true)}
              >
                privacy and policy
              </button>
            </label>
          </div>
          <div className="flex items-center  my-2">
            <input
              onChange={handleChangePrivacy}
              name="checked"
              id="privacyId"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="privacyId"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <button
                type="button"
                className="underline text-blue-500 hover:opacity-80 focus:outline-none"
                onClick={() => setShowTermsOfUse(true)}
              >
                terms of use
              </button>
            </label>
          </div>
        </div>
        <div className="flex-row flex justify-center m-4">
          {' '}
          <Button
            text="Submit"
            type="submit"
            addClassName={`text-white px-4 py-2 rounded focus:outline-none  ${
              checkedTerm && checkedPrivacy
                ? 'bg-amber-300'
                : 'custom-button-color border custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1 grayscale disabled-button'
            } rounded text-lg `}
            disabled={!(checkedTerm && checkedPrivacy)}
          />
        </div>
      </form>
      {showPrivacyPolicy ? (
        <Modal
          title="Privacy and policy"
          addClassName="w-4/5"
          close={() => setShowPrivacyPolicy(false)}
        >
          <PrivacyAndPolicy />
        </Modal>
      ) : null}
      {showTermsOfUse ? (
        <Modal title="Terms of use" addClassName="w-4/5" close={() => setShowTermsOfUse(false)}>
          <TermsOfUse />
        </Modal>
      ) : null}
    </div>
  );
}
export default Registration;
