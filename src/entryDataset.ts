import { Tag } from ".";
import { FamilyRecord } from "./familyRecord";
import { Header } from "./header";
import { IndividualRecord } from "./individualRecord";
import { MultimediaRecord } from "./multimediaRecord";
import { RepositoryRecord } from "./repositoryRecord";
import { SharedNoteRecord } from "./sharedNoteRecord";
import { SourceRecord } from "./sourceRecord";
import { SubmitterRecord } from "./submitterRecord";

export interface EntryDataset {
  [Tag.Header]: Header;
  [Tag.Family]: FamilyRecord[];
  [Tag.Individual]: IndividualRecord[];
  [Tag.Media]: MultimediaRecord[];
  [Tag.Repository]: RepositoryRecord[];
  [Tag.Note]: SharedNoteRecord[];
  [Tag.Source]: SourceRecord[];
  [Tag.Submitter]: SubmitterRecord[];
}