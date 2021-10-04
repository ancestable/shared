import { Tag } from "./enums/tag.enum";
import { NoteStructure } from "./noteStructure";
import { SourceCitation } from "./sourceCitation";

export interface NonEventStructure {
  [Tag.NonEvent]: {
    [Tag.Date]?: {
      value: string;
      [Tag.Phrase]?: string;
    };
    noteStructures: NoteStructure[];
    sourceCitations: SourceCitation[];
  }
}