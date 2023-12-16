import * as services from '../services/register.service';

// POST /api/register
export const add = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await services.addNewUser(username, email, password);

    res.status(201).json({ newUser });
  } catch (err) {
    const usernameError = 'duplicate key value violates unique constraint "users_username_key"';
    const emailError = 'duplicate key value violates unique constraint "users_email_key"';

    const errorMsg =
      err.message == usernameError
        ? 'Username already taken!'
        : err.message == emailError
          ? 'This email was registered before!'
          : err.message;

    res.status(400).json({
      message: 'Bad Request',
      error: errorMsg,
    });
  }
};
