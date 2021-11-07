import { SourceRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface ISourceRecordModel extends SourceRecord, IBaseRecord { }

export type SourceRecordCreationModel = Omit<ISourceRecordModel, '_id' | 'id'>;
