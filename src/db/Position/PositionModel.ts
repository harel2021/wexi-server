import { Schema, model } from 'mongoose';
import { IPosition, collectionName } from './PositionInterface';
import { TypeUtils } from '../../utils/TypeUtils';

const schema = new Schema({
    [TypeUtils.propertyOf<IPosition>('x')]: {
        type: Number,
        required: true
    },
    [TypeUtils.propertyOf<IPosition>('y')]: {
        type: Number,
        required: true
    }
});

const PositionModel = model<IPosition>(collectionName, schema);

export default PositionModel;