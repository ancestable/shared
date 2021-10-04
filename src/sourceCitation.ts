import { Tag } from "./enums/tag.enum";
import { MultimediaLink } from "./multimediaLink";
import { NoteStructure } from "./noteStructure";
import { SourPointer } from "./pointer";
import { QualityOfData } from "./enums/qualityOfData.enum";
import { Mime } from "./enums/mime.enum";
import { Role } from "./enums/role.enum";

export interface SourceCitation {
  [Tag.Source]: {
    reference: SourPointer;
    [Tag.Page]?: string;
    [Tag.Data]?: {
      [Tag.Date]?: {
        value: string;
        [Tag.Time]?: string;
        [Tag.Phrase]?: string;
      };
      [Tag.Text]?: {
        value: string;
        [Tag.Mime]?: Mime;
        [Tag.Language]?: string;
      }
    };
    [Tag.Event]?: {
      value: string;
      [Tag.Phrase]?: string;
      [Tag.Role]?: {
        value: Role;
        [Tag.Phrase]?: string;
      }
    };
    [Tag.QualityOfData]?: QualityOfData;
    multimediaLinks?: MultimediaLink[];
    noteStructures?: NoteStructure[];
  };
}