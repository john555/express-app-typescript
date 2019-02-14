import * as express from 'express';
import { movieRouter } from './routes/';

const api = express();
// You may add api specific middlewares here

// TODO: move all controllers in the src/api/controllers folder
// api.get('/', (req, res) => {
//   res.send({
//     message: 'Hello from the API',
//   });
// });

api.use('/movies', movieRouter)
export default api;
