//import { *services } from '../services/api.services.js';

export const getApi = (req, res) => {
  try {
    res
      .status(200)
      .send(`<html style='background-color: grey'><h1> GET URL:  ${req.url}api/ </h1></html>`);
  } catch (err) {
    res.status(400).send({
      error: 'Internal server error.',
      message: err.message,
    });
  }
};
