import { Router } from "express";

/**
 * Parent class for routing controller configuration
 */
export class CustomRouter
{    
    router : Router;

    constructor()
    {
        this.router = Router();  
    }

    /**
     * Return in child configured router
     */
    getRouter() : Router
    {
        return this.router;
    }
}