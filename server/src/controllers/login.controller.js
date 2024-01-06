import * as services from '../services/login.services';

const COOKIE_NAME = 'authToken';
const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 3 * 60 * 60 * 1000,
  sameSite: 'strict',
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await services.loginUser(username, password);

    if (result) {
      const { user, token } = result;

      res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS);
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};