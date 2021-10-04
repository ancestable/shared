import { Tag } from "./enums/tag.enum";
import { IndividualEventDetail } from "./individualEventDetail";

export interface IndividualAttributeStructureCAST {
  type: Tag.Caste;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureEDUC {
  type: Tag.Education;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureIDNO {
  type: Tag.IdentificationNumber;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureNATI {
  type: Tag.Nationality;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureNCHI {
  type: Tag.ChildrenCount;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureNMR {
  type: Tag.MarriageCount;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureOCCU {
  type: Tag.Occupation;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructurePROP {
  type: Tag.Property;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureRELI {
  type: Tag.Religion;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureRESI {
  type: Tag.Residence;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureSSN {
  type: Tag.SocialSecurityNumber;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureTITL {
  type: Tag.Title;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualAttributeStructureFACT {
  type: Tag.Fact;
  value: string;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export type IndividualAttributeStructure =
  IndividualAttributeStructureCAST
  | IndividualAttributeStructureEDUC
  | IndividualAttributeStructureIDNO
  | IndividualAttributeStructureNATI
  | IndividualAttributeStructureNCHI
  | IndividualAttributeStructureNMR
  | IndividualAttributeStructureOCCU
  | IndividualAttributeStructurePROP
  | IndividualAttributeStructureRELI
  | IndividualAttributeStructureRESI
  | IndividualAttributeStructureSSN
  | IndividualAttributeStructureTITL
  | IndividualAttributeStructureFACT;

export const IndividualAttributeStructureTags = [
  Tag.Caste,
  Tag.Education,
  Tag.IdentificationNumber,
  Tag.Nationality,
  Tag.ChildrenCount,
  Tag.Occupation,
  Tag.Property,
  Tag.Religion,
  Tag.Residence,
  Tag.SocialSecurityNumber,
  Tag.Title,
  Tag.Fact,
];
