import { Tag } from "./enums/tag.enum";
import { EventDetail } from "./eventDetail";

export interface FamilyEventDetail {
  [Tag.Husband]?: {
    [Tag.Age]: {
      value: string;
      [Tag.Phrase]?: string;
    }
  };
  [Tag.Wife]?: {
    [Tag.Age]: {
      value: string;
      [Tag.Phrase]?: string;
    }
  };
  eventDetail?: EventDetail;
}