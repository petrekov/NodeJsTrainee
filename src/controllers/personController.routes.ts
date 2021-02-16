import { CustomRouter } from "../global/classes/customRouter";
import { IRouter } from "../global/interfaces/iRouter";
import { PersonController } from "./personController";

export class PersonControllerRouter extends CustomRouter implements IRouter
{
    personController : PersonController;

    constructor()
    {
        super();
        this.personController = new PersonController()
        this.configure();        
    }

    configure()
    {
        this.router.get('/', (request, response):any => {
            return response.json(this.personController.GetUserDetail(response));
        }); 
        
    }
}