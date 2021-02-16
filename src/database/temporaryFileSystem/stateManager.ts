import { NumberKeyEntity } from "../entity/numberKeyEntity";
import { FileManager } from "./fileManager";

export class StateManager
{
    /**
     * InitialFile
     */
    public static InitialNumberKeys() 
    {
        let numberKeys : NumberKeyEntity[] = [];
        
        numberKeys.push(new NumberKeyEntity(
        {
            id : 1,
            number : "1",
            recommendedWord : "Tůň"
        }));
        
        numberKeys.push(new NumberKeyEntity(
        {
            id : 2,
            number : "2",
            recommendedWord : "Tůň"
        }));
        
        numberKeys.push(new NumberKeyEntity(
        {
            id : 3,
            number : "3",
            recommendedWord : "Tůň"
        }));

        FileManager.saveState("numberKey",numberKeys);
    }

    static NumberKeys = class 
    {       
        public static GetAll() : NumberKeyEntity[]
        {
            return FileManager.loadState("numberKey") as NumberKeyEntity[];
        }      
    }
}