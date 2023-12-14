// GET /api/
export const getApi = (req, res) => {
  try {
    res.status(200);
  } catch (err) {
    res.status(400).send({
      error: 'Internal server error.',
      message: err.message,
    });
  }
};
