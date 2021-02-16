export class JwtUser
{    
    public id : number;
    
    public constructor(init?:Partial<JwtUser>) {
        Object.assign(this, init);
    }

}