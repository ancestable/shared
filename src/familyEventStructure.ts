import { Tag } from "../gedcom/enums/tag.enum";
import { FamilyEventDetail } from "./familyEventDetail";

export interface FamilyEventStructureANUL {
  type: Tag.Annulment;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureCENS {
  type: Tag.Census;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureDIV {
  type: Tag.Divorce;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureDIVF {
  type: Tag.DivorceFiled;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureENGA {
  type: Tag.Engagement;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureMARB {
  type: Tag.MarriageBan;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureMARC {
  type: Tag.MarriageContract;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureMARL {
  type: Tag.MarriageLicense;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureMARS {
  type: Tag.MarriageSettlement;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureMARR {
  type: Tag.Marriage;
  [Tag.Type]?: string;
  familyEventDetail?: FamilyEventDetail;
}

export interface FamilyEventStructureEVEN {
  value: string;
  type: Tag.Event;
  [Tag.Type]: string;
  familyEventDetail?: FamilyEventDetail;
}

export type FamilyEventStructure = FamilyEventStructureANUL
  | FamilyEventStructureCENS
  | FamilyEventStructureDIV
  | FamilyEventStructureDIVF
  | FamilyEventStructureENGA
  | FamilyEventStructureMARB
  | FamilyEventStructureMARC
  | FamilyEventStructureMARL
  | FamilyEventStructureMARS
  | FamilyEventStructureMARR
  | FamilyEventStructureEVEN;

export const FamilyEventStructureTags = [
  Tag.Census,
  Tag.Divorce,
  Tag.DivorceFiled,
  Tag.Engagement,
  Tag.MarriageBan,
  Tag.MarriageContract,
  Tag.MarriageLicense,
  Tag.MarriageSettlement,
  Tag.Marriage,
  Tag.Event,
];