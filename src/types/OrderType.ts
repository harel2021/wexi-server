
import { PositionType } from './PositionType';
import { PassengerType } from './PassengerType';

export type OrderType = {    
    source: PositionType;
    destination: PositionType;
    passengers: PassengerType[];
}