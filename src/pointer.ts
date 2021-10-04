import { PointerTarget } from "../gedcom/enums/pointerTarget.enum";

export interface Pointer {
  reference: string;
  target: PointerTarget;
}

export interface FamPointer {
  reference: string;
  target: PointerTarget.FAM;
}

export interface IndiPointer {
  reference: string;
  target: PointerTarget.INDI;
}

export interface ObjePointer {
  reference: string;
  target: PointerTarget.OBJE;
}

export interface SNotePointer {
  reference: string;
  target: PointerTarget.SNOTE;
}

export interface SourPointer {
  reference: string;
  target: PointerTarget.SOUR;
}

export interface SubmPointer {
  reference: string;
  target: PointerTarget.SUBM;
}

export interface RepoPointer {
  reference: string;
  target: PointerTarget.REPO;
}