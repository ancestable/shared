import { Tag } from "./enums/tag.enum";

export interface Header {
  [Tag.Gedcom]: {
    [Tag.Version]: string;
  };
  [Tag.ExtensionSchema]?: {
    [Tag.Tag]?: string[];
  };
  [Tag.Source]?: {
    [Tag.Version]?: string;
    [Tag.Name]?: string;
    [Tag.Corporate]?: {
      value?: string;
      [Tag.Phone]: string[];
      [Tag.Email]: string[];
      [Tag.Fax]: string[];
      [Tag.Web]: string[];
    };
    [Tag.Data]?: {
      value?: string;
      [Tag.Date]?: {
        value?: string;
        [Tag.Time]?: string;
      };
      [Tag.Corporate]?: string;
    }
  };
  [Tag.Destination]?: string;
  [Tag.Date]?: {
    value?: string;
    [Tag.Time]?: string;
  };
  [Tag.Submitter]?: any;
  [Tag.Corporate]?: string;
  [Tag.Language]?: string;
  [Tag.Place]?: any;
}