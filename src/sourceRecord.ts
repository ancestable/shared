import { Tag } from "../gedcom/enums/tag.enum";
import { ChangeDate } from "./changeDate";
import { CreationDate } from "./creationDate";
import { IdentifierStructure } from "./identifierStructure";
import { MultimediaLink } from "./multimediaLink";
import { NoteStructure } from "./noteStructure";
import { PlaceStructure } from "./placeStructure";
import { SourceRepositoryCitation } from "./sourceRepositoryCitation";
import { Mime } from "../gedcom/enums/mime.enum";

export interface SourceRecord {
  [Tag.Source]: {
    referenceId: string;
    [Tag.Data]?: {
      [Tag.Event]?: {
        value: string;
        [Tag.Date]?: {
          value: string;
          [Tag.Phrase]?: string;
        };
        placeStructure?: PlaceStructure;
      };
      [Tag.Agency]?: string;
      noteStructures?: NoteStructure[];
    }
    [Tag.Author]?: string;
    [Tag.Abbreviation]?: string;
    [Tag.Publication]?: string;
    [Tag.Text]?: {
      value: string;
      [Tag.Mime]?: Mime;
      [Tag.Language]: string;
    };
    sourceRepositoryCitation?: SourceRepositoryCitation[];
    identifierStructures?: IdentifierStructure[];
    noteStructures?: NoteStructure[];
    multiMediaLinks?: MultimediaLink[];
    changeDate?: ChangeDate;
    creationDate?: CreationDate;
  }
}