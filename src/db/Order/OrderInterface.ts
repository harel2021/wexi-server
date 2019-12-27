import { IBaseModel } from '../Generic/BaseModel';
import { OrderType } from '../../types/OrderType';

export interface IOrder extends IBaseModel, OrderType {
  
}

export const collectionName = 'Order';