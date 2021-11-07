import { Observable } from 'windowed-observable';
import { ObservableNames } from './enums/observableNames';

export class WindowObservable {
  static get DatasetWithRecords() {
    return new Observable(ObservableNames.DatasetWithRecords);
  }
}

