import { Tag } from "./enums/tag.enum";
import { AddressStructure } from "./addressStructure";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { NoteStructure } from "./noteStructure";

export interface RepositoryRecord {
  [Tag.Repository]: {
    referenceId: string;
    [Tag.Name]: string;
    addressStructure?: AddressStructure;
    [Tag.Phone]?: string[];
    [Tag.Email]?: string[];
    [Tag.Fax]?: string[];
    [Tag.Web]?: string[];
    noteStructures?: NoteStructure[];
    identifierStructures?: IdentifierStructure[];
    changeDate?: ChangeDate;
    creationDate?: CreationDate;
  }
}