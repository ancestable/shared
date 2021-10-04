import { Tag } from "../gedcom/enums/tag.enum";

export interface PersonalNamePieces {
  [Tag.NamePrefix]?: string[];
  [Tag.GivenName]?: string[];
  [Tag.Nickname]?: string[];
  [Tag.SurnamePrefix]?: string[];
  [Tag.Surname]?: string[];
  [Tag.NameSuffix]?: string[];
}