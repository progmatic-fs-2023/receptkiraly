import pg from 'pg';
import 'dotenv/config';

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

pool
  .connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.log(`Error connecting to the database: ${err}`));

export const query = (text, params) => pool.query(text, params);
