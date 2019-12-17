import {OrderController} from  './Order/OrderController';
import { DefaultOrderController } from './Order/DefaultOrderController';

const orderController : OrderController = new DefaultOrderController();


export {
    orderController
}