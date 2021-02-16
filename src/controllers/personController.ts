import express  from "express";
import { NumberKeyEntity } from "../database/entity/numberKeyEntity";
import { StateManager } from "../database/temporaryFileSystem/stateManager";
import { JwtUser } from "../models/security/jwtUser";

export class PersonController
{
    /**
     * name
     */
    public GetUserDetail(response : express.Response) : NumberKeyEntity[]
    {
        //StateManager.InitialNumberKeys();
        return StateManager.NumberKeys.GetAll();
        //let user = response.locals.user as JwtUser;
        //return user;
    }
}