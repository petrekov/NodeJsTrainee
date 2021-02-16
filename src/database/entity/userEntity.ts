export class UserEntity
{
    public constructor(init?:Partial<UserEntity>) {
        Object.assign(this, init);
    }

    id : number;
    username : string;
}