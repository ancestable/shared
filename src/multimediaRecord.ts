import { Tag } from "../gedcom/enums/tag.enum";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { NoteStructure } from "./noteStructure";
import { Restriction } from "../gedcom/enums/restriction.enum";
import { SourceCitation } from "./sourceCitation";
import { MultimediaFormat } from "../gedcom/enums/multimediaFormat.enum";
import { Medi } from "../gedcom/enums/medi.enum";

export interface MultimediaRecord {
  [Tag.Object]: {
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
}