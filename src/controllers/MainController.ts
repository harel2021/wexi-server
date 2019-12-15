import { Request, Response } from 'express';

export abstract class MainController {
    public abstract get(req: Request, res: Response): void;
    public abstract post(req: Request, res: Response): void;
    public abstract put(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;

}