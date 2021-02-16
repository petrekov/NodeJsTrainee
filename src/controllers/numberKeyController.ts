import express  from "express";
import { NumberKeyEntity } from "../database/entity/numberKeyEntity";
import { StateManager } from "../database/temporaryFileSystem/stateManager";
import { JwtUser } from "../models/security/jwtUser";

export class NumberKeyController
{
    public GetAll() : NumberKeyEntity[]
    {
        return StateManager.NumberKeys.GetAll();
    }

    public GetAllDefined() 
    {

    }
}