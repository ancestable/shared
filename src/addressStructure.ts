import { Tag } from "./enums/tag.enum";

export interface AddressStructure {
  [Tag.Address]: {
    [Tag.Address1]?: string;
    [Tag.Address2]?: string;
    [Tag.Address3]?: string;
    [Tag.City]?: string;
    [Tag.State]?: string;
    [Tag.PostalCode]?: string;
    [Tag.Country]?: string;
  }
}
