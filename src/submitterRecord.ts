import { Tag } from "./enums/tag.enum";
import { AddressStructure } from "./addressStructure";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { MultimediaLink } from "./multimediaLink";
import { NoteStructure } from "./noteStructure";

export interface SubmitterRecord {
  [Tag.Submitter]: {
    referenceId: string;
    [Tag.Name]: string;
    addressStructure?: AddressStructure;
    [Tag.Phone]?: string[];
    [Tag.Email]?: string[];
    [Tag.Fax]?: string[];
    [Tag.Web]?: string[];
    multimediaLinks?: MultimediaLink[];
    [Tag.Language]?: string[];
    identifierStructures?: IdentifierStructure[];
    noteStructures?: NoteStructure[];
    changeDate?: ChangeDate;
    creationDate?: CreationDate;
  }
}