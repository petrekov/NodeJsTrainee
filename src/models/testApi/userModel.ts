/**
 * Data model for user
 */
export class userModel 
{
    /** Name of user */
    public name : string; 

    /** Age of user */
    public age : number; 

    /** Sex of a user (M - male, F - female, O - other) */
    public sex : "M" | "F" | "O";

    /**
     * 
     * @param name Name of a user
     * @param age Age of a user
     * @param sex Sex of a user (M - male, F - female, O - other)
     */
    constructor(name : string, age : number = 18, sex : "M" | "F" | "O" = "F")
    {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}