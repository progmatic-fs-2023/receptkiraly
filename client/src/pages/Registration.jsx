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
      const response = await fetch('localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setRegistrationMessage('Registration successful!');
      } else {
        setRegistrationMessage('Registration failed.');
      }
    } catch (err) {
      setRegistrationMessage('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>

        {registrationMessage && <div>{registrationMessage}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
