import 'reflect-metadata';

import app from '@shared/infra/http/middlewares/app';

/*import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';


import '@shared/infra/typeorm';
import '@shared/container';
import '@modules/users/providers';
//import './providers';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder)); //vizualizar no navegador
app.use(routes);

app.use(( err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

export default app;*/


import '@shared/infra/typeorm';
import '@modules/users/providers';



app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
