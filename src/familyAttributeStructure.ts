import { Tag } from "./enums/tag.enum";
import { FamilyEventDetail } from "./familyEventDetail";

export interface FamilyAttributeStructureNCHI {
  type: Tag.ChildrenCount;
  value: number;
  [Tag.Type]: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyAttributeStructureRESI {
  type: Tag.Residence;
  value: string;
  [Tag.Type]: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyAttributeStructureFACT {
  type: Tag.Fact;
  value: string;
  [Tag.Type]: string;
  familyEventDetail?: FamilyEventDetail;
}

export type FamilyAttributeStructure =
  FamilyAttributeStructureNCHI
  | FamilyAttributeStructureRESI
  | FamilyAttributeStructureFACT;

export const FamilyAttributeStructureTags = [
  Tag.ChildrenCount,
  Tag.Residence,
  Tag.Fact,
];