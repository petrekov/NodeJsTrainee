export class User_NumberKeyEntity
{
    public constructor(init?:Partial<User_NumberKeyEntity>) {
        Object.assign(this, init);
    }

    personId : number;
    numberKeyId : number;
    choosenWord : string;
    numberOfTips : number;
    numberOfCorrectTips: number; 
    learningValue : number;
}
