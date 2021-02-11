import { Router } from "express";

export interface IRouter
{
    configure();
    getRouter() : Router;
}