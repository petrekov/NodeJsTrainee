import { CustomRouter } from '../global/classes/customRouter';
import { IRouter } from '../global/interfaces/iRouter';
import { userModel } from '../models/testApi/userModel';
import { testApiController } from './testApi';

export class testApiRouter extends CustomRouter implements IRouter
{
    testApiController : testApiController;

    constructor()
    {
        super();
        this.testApiController = new testApiController()
        this.configure();        
    }

    configure()
    {
        this.router.get('/', (request, response):any => {
            return response.json(this.testApiController.getUsers());
        });   
        
        this.router.post('/', (request, response):any => {
            return response.json(this.testApiController.createUser(request.body as userModel));
        }); 

        this.router.delete('/byName', (request, response):any => {
            return response.json(this.testApiController.removeUserByName(request.query.name as string));
        }); 
    }
}
