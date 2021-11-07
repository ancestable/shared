import { MultimediaRecord } from '@ancestable/gedcom7models';
import { IBaseRecord } from './baseRecord';

export interface IMultimediaRecordModel extends MultimediaRecord, IBaseRecord { }

export type MultimediaRecordCreationModel = Omit<IMultimediaRecordModel, '_id' | 'id'>;