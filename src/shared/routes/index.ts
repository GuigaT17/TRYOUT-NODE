import { Router } from 'express';
import clientRouter from '@modules/client/routes/client.routes';
import transactionRouter from '@modules/transaction/routes/transaction.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

routes.use('/clients', clientRouter);
routes.use('/transactions', transactionRouter);

export default routes;