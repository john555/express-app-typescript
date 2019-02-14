import { Router } from 'express';
import { getMovies } from '../controllers/getMovies';

export const movieRouter = Router();

movieRouter.get('/', getMovies);
