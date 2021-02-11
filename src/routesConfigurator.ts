import { Router } from 'express';
import { testApiRouter } from './controllers/testApi.routes';

const routes = Router();

routes.use('/testApi', new testApiRouter().getRouter());

export default routes;