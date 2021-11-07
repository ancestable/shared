import { Observable } from 'windowed-observable';
import { IDatasetModelWithRecords } from '.';
import { ObservableNames } from './enums/observableNames';

export class WindowObservable {
  static get DatasetWithRecords(): Observable<IDatasetModelWithRecords> {
    return new Observable<IDatasetModelWithRecords>(ObservableNames.DatasetWithRecords);
  }
}

