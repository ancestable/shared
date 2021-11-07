import { SubmitterRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface ISubmitterRecordModel extends SubmitterRecord, IBaseRecord { }

export type SubmitterRecordCreationModel = Omit<ISubmitterRecordModel, '_id' | 'id'>;
