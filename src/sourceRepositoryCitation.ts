import { MultimediaFormat } from "../gedcom/enums/multimediaFormat.enum";
import { Tag } from "../gedcom/enums/tag.enum";
import { NoteStructure } from "./noteStructure";

export interface SourceRepositoryCitation {
  referenceId: string;
  noteStructures?: NoteStructure[];
  [Tag.CallNumber]?: {
    value: string;
    [Tag.Media]?: {
      value: MultimediaFormat;
      [Tag.Phrase]: string;
    }
  }[];
}
