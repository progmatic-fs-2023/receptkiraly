// GET /api/
export const getApi = (req, res, next) => {
  try {
    res.status(200);
  } catch (err) {
    next(err);
  }
};
