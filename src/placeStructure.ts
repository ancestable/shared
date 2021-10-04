import { Tag } from "../gedcom/enums/tag.enum";
import { NoteStructure } from "./noteStructure";

export interface PlaceStructure {
  [Tag.Place]: {
    value: string;
    [Tag.Format]?: string;
    [Tag.Language]?: string;
    [Tag.Translation]?: {
      value: string;
      [Tag.Language]: string;
    }[];
    [Tag.Map]?: {
      [Tag.Latitude]: string;
      [Tag.Longitude]: string
    };
    [Tag.ExternalIdentifier]?: {
      value: string;
      [Tag.Type]?: string;
    }[];
    noteStructures?: NoteStructure[];
  };
}