import { Tag } from "../gedcom/enums/tag.enum";
import { EventDetail } from "./eventDetail";

export interface IndividualEventDetail {
  eventDetail?: EventDetail;
  [Tag.Age]: {
    value: string;
    [Tag.Phrase]?: string;
  }
}