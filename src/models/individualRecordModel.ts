import { IndividualRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface IIndividualRecordModel extends IndividualRecord, IBaseRecord { }

export type IndividualRecordCreationModel = Omit<IIndividualRecordModel, '_id' | 'id'>;