import { Tag } from "./enums/tag.enum";

export interface IdentifierStructureREFN {
  type: Tag.Reference;
  value: string;
  [Tag.Type]?: string;
}

export interface IdentifierStructureUID {
  type: Tag.UniqueIdentifier;
  value: string;
}

export interface IdentifierStructureEXID {
  type: Tag.ExternalIdentifier;
  value: string;
  [Tag.Type]?: string;
}

export type IdentifierStructure =
  IdentifierStructureREFN
  | IdentifierStructureUID
  | IdentifierStructureEXID;

