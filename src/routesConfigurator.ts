import { Router } from 'express';
import { TestPresenter } from './presenters/testPresenter';

/**
 * Router for registration of all api url´s
 */
const routes = Router();

// Registration of endpoints
routes.use('/test', new TestPresenter().getRouter());

export default routes;