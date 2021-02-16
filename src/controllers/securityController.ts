import { JwtUser } from "../models/security/jwtUser";

export class SecurityController 
{
    
    /**
     * name
     */
    static Authorize() : JwtUser
    {
        if(true)
        {
            return new JwtUser({id : 1});
        }
    }
}