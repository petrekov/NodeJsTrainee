import { writeFileSync, readFileSync,readdirSync } from 'fs';

export class FileManager
{
    static saveState(source : string, data : any) : void
    {
      writeFileSync("./src/database/temporaryFileSystem/" + source + '.txt', JSON.stringify(data));
    } 
    
    static loadState(source : string) : any
    {
      return JSON.parse(readFileSync("./src/database/temporaryFileSystem/numberKey.txt", 'utf8'));
    }
}