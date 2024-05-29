import { profession } from "./job";

export interface User{
    id:number,
    userName:string,
    password:string,
    profession:profession
}
