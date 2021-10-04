import { Tag } from "../gedcom/enums/tag.enum";
import { ObjePointer } from "./pointer";

export interface MultimediaLink {
  [Tag.Object]: {
    reference: ObjePointer;
    [Tag.Crop]?: {
      [Tag.Top]?: string;
      [Tag.Left]?: string;
      [Tag.Height]?: string;
      [Tag.Width]?: string;
    };
    [Tag.Title]?: string;
  }
}