import { Tag } from "../gedcom/enums/tag.enum";
import { NoteStructure } from "./noteStructure";
import { IndiPointer } from "./pointer";
import { Role } from "../gedcom/enums/role.enum";
import { SourceCitation } from "./sourceCitation";

export interface AssociationStructure {
  [Tag.Associates]: {
    reference: IndiPointer;
    [Tag.Phrase]?: string;
    [Tag.Role]?: {
      value: Role;
      [Tag.Phrase]?: string;
    };
    noteStructures?: NoteStructure[];
    sourceCitations?: SourceCitation[];
  }
}
