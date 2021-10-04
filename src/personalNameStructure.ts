import { Tag } from "./enums/tag.enum";
import { NameType } from "./enums/nameType.enum";
import { NoteStructure } from "./noteStructure";
import { PersonalNamePieces } from "./personalNamePieces";
import { SourceCitation } from "./sourceCitation";

export interface PersonalNameStructure {
  [Tag.Name]: {
    value: string;
    [Tag.Type]?: {
      value: NameType;
      [Tag.Phrase]?: string;
    };
    personalNamePieces?: PersonalNamePieces;
    [Tag.Translation]: {
      value: string;
      [Tag.Language]: string;
      personalNamePieces?: PersonalNamePieces;
    }[];
    noteStructures: NoteStructure[];
    sourceCitations: SourceCitation[];
  }
}