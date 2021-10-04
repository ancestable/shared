import { Tag } from "./enums/tag.enum";
import { AssociationStructure } from "./associationStructure";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { FamcStat } from "./enums/famcStat.enum";
import { IdentifierStructure } from "./identifierStructure";
import { IndividualAttributeStructure } from "./individualAttributeStructure";
import { IndividualEventStructure } from "./individualEventStructure";
import { MultimediaLink } from "./multimediaLink";
import { NonEventStructure } from "./nonEventStructure";
import { NoteStructure } from "./noteStructure";
import { PersonalNameStructure } from "./personalNameStructure";
import { FamPointer, IndiPointer, SubmPointer } from "./pointer";
import { Restriction } from "./enums/restriction.enum";
import { SourceCitation } from "./sourceCitation";
import { Sex } from "./enums/sex.enum";
import { Pedi } from "./enums/pedi.enum";

export interface IndividualRecord {
  [Tag.Individual]: {
    referenceId: string;
    [Tag.Restriction]?: Restriction[];
    personalNameStructures?: PersonalNameStructure[];
    [Tag.Sex]?: Sex;
    individualAttributeStructures?: IndividualAttributeStructure[];
    individualEventStructures?: IndividualEventStructure[];
    nonEventStructures?: NonEventStructure[];
    [Tag.FamilyChild]?: {
      reference: FamPointer;
      [Tag.Pedigree]?: {
        value: Pedi;
        [Tag.Phrase]?: string;
      };
      [Tag.Status]?: {
        value: FamcStat;
        [Tag.Phrase]?: string;
      };
      noteStructures?: NoteStructure[];
    }[];
    [Tag.FamilySpouse]?: {
      reference: FamPointer;
      noteStructures?: NoteStructure[];
    }[];
    [Tag.Submitter]?: SubmPointer[];
    associationStructures?: AssociationStructure[];
    [Tag.Alias]?: {
      reference: IndiPointer;
      [Tag.Phrase]?: string;
    }[];
    [Tag.AncestorInterest]?: SubmPointer[];
    [Tag.DescendantInt]?: SubmPointer[];
    identifierStructures?: IdentifierStructure[];
    noteStructures?: NoteStructure[];
    sourceCitations?: SourceCitation[];
    multimediaLinks?: MultimediaLink[];
    changeDate?: ChangeDate;
    creationDate?: CreationDate;
  }
}