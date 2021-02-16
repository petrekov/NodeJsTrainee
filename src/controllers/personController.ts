import express  from "express";
import { JwtUser } from "../models/security/jwtUser";

export class PersonController
{
    /**
     * name
     */
    public GetUserDetail(response : express.Response) : JwtUser
    {
        let user = response.locals.user as JwtUser;
        return user;
    }
}