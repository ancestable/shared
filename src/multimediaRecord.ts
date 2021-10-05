import { Tag } from "./enums/tag.enum";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { NoteStructure } from "./noteStructure";
import { Restriction } from "./enums/restriction.enum";
import { SourceCitation } from "./sourceCitation";
import { MultimediaFormat } from "./enums/multimediaFormat.enum";
import { Medi } from "./enums/medi.enum";

export interface MultimediaRecord {
  referenceId: string;
  [Tag.Restriction]: Restriction[];
  [Tag.File]?: {
    value: string;
    [Tag.Format]?: {
      value: MultimediaFormat;
      [Tag.Media]?: {
        value: Medi;
        [Tag.Phrase]?: string;
      };
    };
    [Tag.Title]?: string;
    [Tag.Translation]?: {
      value: string;
      [Tag.Format]: MultimediaFormat;
    }[];
  }[];
  identifierStructures?: IdentifierStructure[];
  noteStructures?: NoteStructure[];
  sourceCitations?: SourceCitation[];
  changeDate?: ChangeDate;
  creationDate?: CreationDate;
}