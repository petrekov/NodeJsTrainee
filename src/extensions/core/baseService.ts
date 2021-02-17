import { Router } from "express";
import express  from "express";

export class BaseService
{
    /**
     *
     */
    constructor() {}

/** 
     * Instance of express router
     */
    private response : express.Response;
    private request : express.Request;

    public initialize(request : express.Request, response : express.Response)
    {
        this.setRequest(request);
        this.setResponse(response);
    }

    private setResponse(response : express.Response) : void 
    {
        this.response = response;
    }

    public getResponse() : express.Response
    {
        return this.response;
    }

    private setRequest(request : express.Request) : void
    {
        this.request = request;
    }

    public getRequest() : express.Request
    {
        return this.request;
    }
}