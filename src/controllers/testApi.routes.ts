import { Router } from 'express';
import { CustomRouter } from '../global/classes/customRouter';
import { IRouter } from '../global/interfaces/iRouter';
import { testApiController } from './testApi';

export class testApiRouter extends CustomRouter implements IRouter
{
    testApiController : testApiController;

    constructor(){
        super();
        this.testApiController = new testApiController()
        this.configure();        
    }

    configure(){
        console.log('Configure router');

        this.router.get('/', (request, response):any => {
            return response.json(this.testApiController.returnTestString());
        });      
    }
}
