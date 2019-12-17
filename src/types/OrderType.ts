
import { PositionType } from './PositionType';
import { PassengerType } from './PassengerType';

export type OrderType = {
    id:string;
    source:PositionType;
    destination:PositionType;
    passengers:PassengerType[];
}