import { Tag } from "../gedcom/enums/tag.enum";
import { NoteStructure } from "./noteStructure";

export interface ChangeDate {
  [Tag.Change]: {
    [Tag.Date]: {
      value: string;
      [Tag.Time]?: string;
    };
    noteStructures: NoteStructure[];
  }
}