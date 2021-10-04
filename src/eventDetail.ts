import { Tag } from "../gedcom/enums/tag.enum";
import { AddressStructure } from "./addressStructure";
import { AssociationStructure } from "./associationStructure";
import { MultimediaLink } from "./multimediaLink";
import { NoteStructure } from "./noteStructure";
import { PlaceStructure } from "./placeStructure";
import { Restriction } from "../gedcom/enums/restriction.enum";
import { SourceCitation } from "./sourceCitation";

export interface EventDetail {
  [Tag.Date]?: {
    value?: string;
    [Tag.Phrase]?: string;
  };
  placeStructure?: PlaceStructure;
  addressStructure?: AddressStructure;
  [Tag.Phone]?: string[];
  [Tag.Email]?: string[];
  [Tag.Fax]?: string[];
  [Tag.Web]?: string[];
  [Tag.Agency]?: string;
  [Tag.Religion]?: string;
  [Tag.Cause]?: string;
  [Tag.Restriction]?: Restriction[];
  [Tag.SortDate]?: {
    value: string;
    [Tag.Time]?: string;
    [Tag.Phrase]?: string;
  };
  associationStructures?: AssociationStructure[];
  noteStructures?: NoteStructure[];
  sourceCitations?: SourceCitation[];
  multimediaLinks?: MultimediaLink[];
}