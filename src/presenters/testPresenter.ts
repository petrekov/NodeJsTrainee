import { BasePresenter } from "../extensions/core/basePresenter";
import { IBasePresenter } from "../extensions/core/IBasePresenter";
import { TestService } from "../services/testService";

export class TestPresenter extends BasePresenter implements IBasePresenter
{
    testService : TestService;

    constructor()
    {
        super();
        this.testService = new TestService();
        this.buildUp(this.testService);
        this.configure();        
    }

    configure()
    {
        this.getEndpoint("/",()=>this.testService.GetUserDetail())  
    }
}