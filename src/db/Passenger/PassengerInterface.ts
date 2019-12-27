import { IBaseModel } from '../Generic/BaseModel';
import { PassengerType } from '../../types/PassengerType';

export interface IPassenger extends IBaseModel, PassengerType {

}

export const collectionName = 'Passenger';