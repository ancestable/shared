import { FamcAdop } from "./enums/famcAdop.enum";
import { Tag } from "./enums/tag.enum";
import { IndividualEventDetail } from "./individualEventDetail";
import { FamPointer } from "./pointer";

export interface IndividualEventStructureBAPM {
  value: string;
  type: Tag.Baptism;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureBARM {
  value: string;
  type: Tag.BarMitzvah;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureBASM {
  value: string;
  type: Tag.BatMitzvah;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureBLES {
  value: string;
  type: Tag.Blessing;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureBURI {
  value: string;
  type: Tag.Burial;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureCENS {
  value: string;
  type: Tag.Census;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureCHRA {
  value: string;
  type: Tag.AdultChristening;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureCONF {
  value: string;
  type: Tag.Confirmation;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureCREM {
  value: string;
  type: Tag.Cremation;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureDEAT {
  value: string;
  type: Tag.Death;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureEMIG {
  value: string;
  type: Tag.Emigration;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureFCOM {
  value: string;
  type: Tag.FirstCommunion;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureGRAD {
  value: string;
  type: Tag.Graduation;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureIMMI {
  value: string;
  type: Tag.Immigration;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureNATU {
  value: string;
  type: Tag.Naturalization;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureORDN {
  value: string;
  type: Tag.Ordination;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructurePROB {
  value: string;
  type: Tag.Probate;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureRETI {
  value: string;
  type: Tag.Retirement;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureWILL {
  value: string;
  type: Tag.Will;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
}

export interface IndividualEventStructureADOP {
  value: string;
  type: Tag.Adoption;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
  [Tag.FamilyChild]?: {
    reference?: FamPointer;
    [Tag.Adoption]?: {
      value?: FamcAdop;
      [Tag.Phrase]?: string;
    }
  }
}

export interface IndividualEventStructureBIRTH {
  value: string;
  type: Tag.Birth;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
  [Tag.FamilyChild]?: FamPointer;
}

export interface IndividualEventStructureCHR {
  value: string;
  type: Tag.Christening;
  [Tag.Type]?: string;
  individualEventDetail?: IndividualEventDetail;
  [Tag.FamilyChild]?: FamPointer;
}

export interface IndividualEventStructureEVEN {
  value: string;
  type: Tag.Event;
  [Tag.Type]: string;
  individualEventDetail?: IndividualEventDetail;
}

export type IndividualEventStructure = IndividualEventStructureBAPM
  | IndividualEventStructureBARM
  | IndividualEventStructureBASM
  | IndividualEventStructureBLES
  | IndividualEventStructureBURI
  | IndividualEventStructureCENS
  | IndividualEventStructureCHRA
  | IndividualEventStructureCONF
  | IndividualEventStructureCREM
  | IndividualEventStructureDEAT
  | IndividualEventStructureEMIG
  | IndividualEventStructureFCOM
  | IndividualEventStructureGRAD
  | IndividualEventStructureIMMI
  | IndividualEventStructureNATU
  | IndividualEventStructureORDN
  | IndividualEventStructurePROB
  | IndividualEventStructureRETI
  | IndividualEventStructureWILL
  | IndividualEventStructureADOP
  | IndividualEventStructureBIRTH
  | IndividualEventStructureCHR
  | IndividualEventStructureEVEN;

export const IndividualEventStructureTags = [
  Tag.BarMitzvah,
  Tag.BatMitzvah,
  Tag.Blessing,
  Tag.Burial,
  Tag.Census,
  Tag.AdultChristening,
  Tag.Confirmation,
  Tag.Cremation,
  Tag.Death,
  Tag.Emigration,
  Tag.FirstCommunion,
  Tag.Graduation,
  Tag.Immigration,
  Tag.Naturalization,
  Tag.Ordination,
  Tag.Probate,
  Tag.Retirement,
  Tag.Will,
  Tag.Adoption,
  Tag.Birth,
  Tag.Christening,
  Tag.Event,
];
