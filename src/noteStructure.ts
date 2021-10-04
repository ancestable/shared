import { Mime } from "./enums/mime.enum";
import { Tag } from "./enums/tag.enum";
import { SNotePointer } from "./pointer";
import { SourceCitation } from "./sourceCitation";

export type NoteStructure = Note | SNote;

export interface Note {
  value: string;
  [Tag.Media]?: Mime;
  [Tag.Language]?: string;
  [Tag.Translation]?: {
    value: string;
    [Tag.Media]?: Mime;
    [Tag.Language]?: string;
  };
  sourceCitations: SourceCitation[];
}

export interface SNote {
  pointer: SNotePointer;
}