import { userModel } from "../models/testApi/userModel";
import { writeFileSync, readFileSync } from 'fs';

/**
 * Testing api controller for crud actions
 */
export class testApiController 
{
  private static collection_users : userModel[] = [];

  /**
   * Method to return some testing text
   */
  getUsers() : userModel[] 
  {
    this.loadState();
    return testApiController.collection_users;
  }

  /**
   * Method for create and return given user 
   * @param user Given user
   */
  createUser(user : userModel) : string 
  {
    let newUser = new userModel(user.name,user.age,user.sex);
    console.log(newUser);
    console.log(user);

    testApiController.collection_users.push(newUser)
    this.saveState();
    return testApiController.collection_users.length.toString();
    //TODO: If name is not settet then is created user without name
    //return testApiController.collection_users[testApiController.collection_users.length - 1];
  }

  removeUserByName(name : string){
    let indexOf : number;

    if((indexOf = testApiController.collection_users.findIndex(x=>x.name == name)) != null){
        testApiController.collection_users.splice(indexOf, 1);
        this.saveState();
    }
  }

  private saveState() : void
  {
    writeFileSync('file.txt', JSON.stringify(testApiController.collection_users));
  } 
  
  private loadState() : void
  {
    testApiController.collection_users = JSON.parse(readFileSync('file.txt', 'utf8')) as userModel[];
  }
}

