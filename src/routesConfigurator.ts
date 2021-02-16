import { Router } from 'express';
import { PersonControllerRouter } from './controllers/personController.routes';
import { testApiRouter } from './controllers/testApi.routes';

/**
 * Router for registration of all api url´s
 */
const routes = Router();

// registration of default info route
//TODO: delete because api dont expect any info route
routes.get('/', (request, response):any => {
    return response.json(
        {
            "_" : "The content of page is",
            "-" : "Testing get action -> /testApi",
        });
});  

// Registration of endpoints
routes.use('/testApi', new testApiRouter().getRouter());
routes.use('/person', new PersonControllerRouter().getRouter());

export default routes;