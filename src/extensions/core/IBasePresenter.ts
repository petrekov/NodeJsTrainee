import { Router } from "express";

/**
 * Interface for BasePresenter
 */
export interface IBasePresenter
{
    /**
     * 
     */
    configure();
    getRouter() : Router;
}