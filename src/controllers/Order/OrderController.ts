import { Request, Response } from 'express';
import { PositionType } from '../../types/PositionType';
import { OrderType } from '../../types/OrderType';

export abstract class OrderController {
    public abstract async getAllOrders(position?: PositionType): Promise<OrderType[]>


}