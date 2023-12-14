// GET /api/
export const isLive = (req, res, next) => {
  try {
    res.status(200);
  } catch (err) {
    next(err);
  }
};
