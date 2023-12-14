import errorHandler from "../middlewares/errorHandler.middleware";

// GET /api/
export const getApi = (req, res, next) => {
  try {
    res.status(200);
  } catch (err) {
    errorHandler(err, req, res, next);
  }
};
