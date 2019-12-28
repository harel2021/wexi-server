import { WexiError } from "./WexiError";

export class ErrorFactory {
    constructor(error: Error) {
        // example for our factory
        if (error.message.includes("db error occured")) {
            throw new Error(error.message);
        }
        else {
            throw new WexiError(error.message);
        }
    }
}

