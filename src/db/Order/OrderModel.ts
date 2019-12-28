import { Schema, model } from 'mongoose';
import { IOrder, collectionName } from './OrderInterface';
import { PositionType } from '../../types/PositionType';
import { TypeUtils } from '../../utils/TypeUtils';
import PositionModel from '../Position/PositionModel';
import PassengerModel from '../Passenger/PassengerModel';


const schema = new Schema({
    [TypeUtils.propertyOf<IOrder>('source')]: {
        type: PositionModel,
    },
    [TypeUtils.propertyOf<IOrder>('destination')]: {
        type: PositionModel,
        required: true
    },
    [TypeUtils.propertyOf<IOrder>('passengers')]: {
        type: [PassengerModel],
        required: true
    }


});

const OrderModel = model<IOrder>(collectionName, schema);

export default OrderModel;

