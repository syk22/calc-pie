export interface ResultRecordType {
  no: number;
  termA: number;
  termB: number;
  mistakes: number;
  time: number;
}

export type PageModeType = 'calc' | 'result';

export type FnType = () => void;
