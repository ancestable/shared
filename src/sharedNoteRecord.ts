import { Tag } from "./enums/tag.enum";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { SourceCitation } from "./sourceCitation";
import { Mime } from "./enums/mime.enum";

export interface SharedNoteRecord {
  referenceId: string;
  value: string;
  [Tag.Mime]?: Mime;
  [Tag.Language]?: string;
  [Tag.Translation]?: {
    value: string;
    [Tag.Mime]?: Mime;
    [Tag.Language]?: string;
  }[];
  sourceCitations?: SourceCitation[];
  identifierStructures?: IdentifierStructure[];
  changeDate?: ChangeDate;
  creationDate?: CreationDate;
}