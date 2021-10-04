import { Tag } from "../gedcom/enums/tag.enum";

export interface CreationDate {
  [Tag.CreationDate]: {
    [Tag.Date]: {
      value: string;
      [Tag.Time]?: string;
    };
  }
}