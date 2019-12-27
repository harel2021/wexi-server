import { Schema, model } from 'mongoose';
import { IOrder, collectionName } from './OrderInterface';
import { PositionType } from '../../types/PositionType';


const schema = new Schema({
    source: {
        type: PositionType,
    },
    destination: {
        type: PositionType,
    },
    passengers: {
        type: [PassengerType]
    }
});

