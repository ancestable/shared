import { SharedNoteRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface ISharedNoteRecordModel extends SharedNoteRecord, IBaseRecord { }

export type SharedNoteRecordCreationModel = Omit<ISharedNoteRecordModel, '_id' | 'id'>;
