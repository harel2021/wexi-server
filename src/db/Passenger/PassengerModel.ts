import { Schema, model } from 'mongoose';
import { IPassenger, collectionName } from './PassengerInterface';
import { TypeUtils } from '../../utils/TypeUtils';

const schema = new Schema({
    [TypeUtils.propertyOf<IPassenger>('firstName')]: {
        type: String,
        required: true
    },
    [TypeUtils.propertyOf<IPassenger>('lastName')]: {
        type: String,
        required: true
    },
    [TypeUtils.propertyOf<IPassenger>('email')]: {
        type: String,
        required: true
    },
    [TypeUtils.propertyOf<IPassenger>('picture')]: {
        type: String,
        required: true,
        default: 'localimage'
    }
});

const PassengerModel = model<IPassenger>(collectionName, schema);

export default PassengerModel;
