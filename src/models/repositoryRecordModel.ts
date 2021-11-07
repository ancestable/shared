import { RepositoryRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface IRepositoryRecordModel extends RepositoryRecord, IBaseRecord { }

export type RepositoryRecordCreationModel = Omit<IRepositoryRecordModel, '_id' | 'id'>;
