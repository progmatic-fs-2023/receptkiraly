import * as users from '../services/user.service';

export const profile = async (req, res) => {
  try {
    const userID = req.params.id;
    const result = await users.getByID(userID);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(401).json({ message: 'User data not found' });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};
