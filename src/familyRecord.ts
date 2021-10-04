import { Tag } from "./enums/tag.enum";
import { AssociationStructure } from "./associationStructure";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { FamilyAttributeStructure } from "./familyAttributeStructure";
import { FamilyEventStructure } from "./familyEventStructure";
import { MultimediaLink } from "./multimediaLink";
import { NonEventStructure } from "./nonEventStructure";
import { NoteStructure } from "./noteStructure";
import { IndiPointer, SubmPointer } from "./pointer";
import { Restriction } from "./enums/restriction.enum";
import { SourceCitation } from "./sourceCitation";

export interface FamilyRecord {
  [Tag.Family]: {
    referenceId: string;
    [Tag.Restriction]?: Restriction[];
    [Tag.Husband]?: IndiPointer;
    [Tag.Wife]?: IndiPointer;
    [Tag.Child]?: IndiPointer[];
    familyAttributeStructures?: FamilyAttributeStructure[];
    familyEventStructures?: FamilyEventStructure[];
    nonEventStructures?: NonEventStructure[];
    associationStructures?: AssociationStructure[];
    [Tag.Submitter]?: SubmPointer[];
    noteStructures?: NoteStructure[];
    sourceCitations?: SourceCitation[];
    multimediaLinks?: MultimediaLink[];
    changeDate?: ChangeDate;
    creationDate?: CreationDate;
  }
}