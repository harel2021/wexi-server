import { Request, Response, NextFunction } from 'express';
import { WexiError } from './WexiError';

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {

    // If there's error made by us
    if (error instanceof WexiError) {
        return res.status(error.status).send({ message: error.message });
    } 

    // Other errors
    return res.status(error.status || 500)
              .send({ message: error.message || 'Internal Server Error' });
}