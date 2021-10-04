import { Entry } from "../entry";
import { Tag } from ".";

export interface EntryDataset {
  [Tag.Header]: Entry;
  [Tag.Family]: Entry[];
  [Tag.Individual]: Entry[];
  [Tag.Media]: Entry[];
  [Tag.Repository]: Entry[];
  [Tag.Note]: Entry[];
  [Tag.Source]: Entry[];
  [Tag.Submitter]: Entry[];
}