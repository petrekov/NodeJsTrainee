export class NumberKeyEntity
{
    public constructor(init?:Partial<NumberKeyEntity>) {
        Object.assign(this, init);
    }

    id : number;
    number : string;
    recommendedWord : string;
}