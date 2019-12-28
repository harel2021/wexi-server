import { IBaseModel } from '../Generic/BaseModel';
import { PositionType } from '../../types/PositionType';

export interface IPosition extends IBaseModel, PositionType {

}

export const collectionName = 'Position';