export interface ResultRecordType {
  no: number;
  termA: number;
  termB: number;
  mistakes: number;
  time: number;
}

export type PageModeType = 'calc' | 'result';

export type FnType = () => void;

export interface Value {
  amount: number;
  maxNum: number;
  index: number;
  thisAnswer: number;
  inputAsAnswer: string;
  resultText: string;
  mistakes: number;
  time: number;
  records: ResultRecordType[];
  termA: number;
  termB: number;
  mode: PageModeType;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setCount: (arg?: 1 | 0) => void;
  updateAnswer: (arg: string) => void;
  setMistakesCount: (arg?: 1 | 0) => void;
  clearRecord: FnType;
  addRecord: FnType;
  timerControl: FnType;
  timerStart: FnType;
  timerEnd: FnType;
  changeMode: (arg: PageModeType) => void;
}
