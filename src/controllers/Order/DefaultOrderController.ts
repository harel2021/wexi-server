import { OrderController } from "./OrderController";
import { PositionType } from "../../types/PositionType";
import { OrderType } from "../../types/OrderType";


export class DefaultOrderController implements OrderController {
    public async getAllOrders(position?: PositionType): Promise<OrderType[]> {
        //Todo: add order logic consider adding order logic 
        const result: object[] = [{}];
        return result as OrderType[];
    }

}
