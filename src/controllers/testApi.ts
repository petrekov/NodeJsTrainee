import { userModel } from "../models/testApi/userModel";

/**
 * Testing api controller for crud actions
 */
export class testApiController 
{
  /**
   * Method to return some testing text
   */
  returnTestString() : string 
  {
    return "This is just some silly testing text";
  }

  /**
   * Method for create and return given user 
   * @param newUser Given user
   */
  createUser(newUser : userModel) : userModel 
  {
    //TODO: If name is not settet them is created user without name
    return new userModel(newUser.name,newUser.age,newUser.sex);
  }
}

