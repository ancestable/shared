import { FamilyRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface IFamilyRecordModel extends FamilyRecord, IBaseRecord { }

export type FamilyRecordCreationModel = Omit<IFamilyRecordModel, '_id' | 'id'>;
