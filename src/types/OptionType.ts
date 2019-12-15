import { Methods } from "./Methods";

export type OptionsType = {
    method:Methods;
    uri:string;
    body?:object;
    headers?:object;

}


