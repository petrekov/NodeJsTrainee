import { Router } from "express";
import express  from "express";
import { BaseService } from "./baseService";

/**
 * Parent class for presenter
 */
export class BasePresenter
{    
    /** 
     * Instance of express router
     */
    private router : Router;
    private corespondingPresenter : BaseService;
    private response : express.Response;
    private request : express.Request;

    /**
     * Default constructor
     */
    constructor()
    {
        this.router = Router();  
    }

    public buildUp(presenter : BaseService)
    {
        this.corespondingPresenter = presenter;
    }

    public getEndpoint(route : string, callback : Function)
    {
        this.router.get(route, (request, response) : any => {
            this.corespondingPresenter.initialize(request,response);
            return response.json(callback());
        });     
    }

    public getResponse() : express.Response
    {
        return this.response;
    }

    public getRequest() : express.Request
    {
        return this.request;
    }

    /**
     * Return in child configured router
     */
    public getRouter() : Router
    {
        return this.router;
    }
}