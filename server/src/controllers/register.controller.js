import * as services from '../services/register.service';

// POST /api/register
export const add = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await services.addNewUser(username, email, password);

    res.status(201).json({ newUser });
  } catch (err) {
    const usernameError =
      'duplicate key value violates unique constraint "users_user_username_key"';
    const emailError = 'duplicate key value violates unique constraint "users_user_email_key"';

    let errorMsg;

    if (err.message === usernameError) {
      errorMsg = 'Username already taken!';
    } else if (err.message === emailError) {
      errorMsg = 'This email was registered before!';
    } else {
      errorMsg = err.message;
    }

    res.status(400).json({
      message: 'Bad Request',
      error: errorMsg,
    });
  }
};
