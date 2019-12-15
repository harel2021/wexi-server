import { WexiError } from "./WexiError";

export class ErrorFactory { 
    constructor(error:Error) {
        // example for our factory
        if(error.message.includes("db error occured")){
            throw new Error();
        }
        else
        {
            throw new WexiError();
        }
    }
}

