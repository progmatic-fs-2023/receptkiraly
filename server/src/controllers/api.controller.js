// GET /api/
export const isLive = (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
