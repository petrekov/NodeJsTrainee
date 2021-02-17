import { NumberKeyEntity } from "../database/entity/numberKeyEntity";
import { StateManager } from "../database/temporaryFileSystem/stateManager";
import { BaseService } from "../extensions/core/baseService";

export class TestService extends BaseService
{
    public GetUserDetail() : NumberKeyEntity[]
    {
        console.log("locals");
        console.log(this.getResponse().locals);
        return StateManager.NumberKeys.GetAll();
    }
}