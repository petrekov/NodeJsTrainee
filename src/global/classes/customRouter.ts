import { Router } from "express";

export class CustomRouter
{    
    router : Router;

    constructor(){
        this.router = Router();  
    }

    getRouter() : Router{
        return this.router;
    }
}