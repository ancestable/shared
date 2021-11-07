import { IFamilyRecordModel, IIndividualRecordModel, IMultimediaRecordModel, IRepositoryRecordModel, ISharedNoteRecordModel, ISourceRecordModel, ISubmitterRecordModel } from '.';
import { UserRole } from './enums/userRole.enum';

type UserWithRoles = { [userId: string]: UserRole };

export interface IDatasetModel {
  _id?: string;
  id?: string;
  users: UserWithRoles;
  name: string;
}
export type DatasetCreationModel = Omit<IDatasetModel, '_id' | 'id' | 'users'>;

export interface IDatasetModelWithRecords extends IDatasetModel {
  familyRecords: IFamilyRecordModel[];
  individualRecords: IIndividualRecordModel[];
  multimediaRecords: IMultimediaRecordModel[];
  repositoryRecords: IRepositoryRecordModel[];
  sharedNoteRecords: ISharedNoteRecordModel[];
  sourceRecords: ISourceRecordModel[];
  submitterRecords: ISubmitterRecordModel[];
}
