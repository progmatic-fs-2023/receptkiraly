// import { *services } from '../services/api.services';
import express from 'express';
import path from 'path';

// GET /api/
export const getApi = (req, res, next) => {
  try {
    res.status(200);
    const distPath = path.join(__dirname, '../../../server/dist');
    express.static(distPath)(req, res, next);
  } catch (err) {
    res.status(400).send({
      error: 'Internal server error.',
      message: err.message,
    });
  }
};
