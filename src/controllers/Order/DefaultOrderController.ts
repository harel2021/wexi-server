import { OrderController } from "./OrderController";
import { PositionType } from "../../types/PositionType";
import { OrderType } from "../../types/OrderType";


export class DefaultOrderController implements OrderController {
    public async getAllOrders(position?: PositionType): Promise<OrderType[]> {
        //Todo: add order logic consider adding order logic 

        // If given position object, try to get closes orders
        if (position) {

        }
        // Otherwise, return a pagination object for orders
        else {

        }
        
        const result: object[] = [{}];
        return result as OrderType[];
    }

}
