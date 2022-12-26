import cors from 'cors';
import express from 'express';
import { countries } from './src/routes/index.js';

const app = express();
app.use(express.json());
app.use(cors());

const INITIAL_PATH = '/api/v1';
app.use(INITIAL_PATH, countries);

export { app };
