import { ReactNode, createContext, useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { FnType, PageModeType, ResultRecordType } from '../types/multipleTypes';
import { generateRandomNum } from '../logic/multipleLogic';

interface Value {
  // amount: number;
  index: number;
  setCount: (arg?: 1 | 0) => void;
  thisAnswer: number;
  updateAnswer: (arg: string) => void;
  inputAsAnswer: string;
  // setInputAsAnswer: React.Dispatch<React.SetStateAction<string>>;
  mistakes: number;
  setMistakesCount: (arg?: 1 | 0) => void;
  time: number;
  records: ResultRecordType[];
  termA: number;
  termB: number;
  addRecord: FnType;
  timerControl: FnType;
  mode: PageModeType;
  // changeMode: (arg: PageModeType) => void;
  // numAarray: number[];
}

interface Child {
  children: ReactNode;
}

// 定数
const QUESTION_AMOUNT = 5;
const MAX_NUM = 25;

export const MultipleContext = createContext({} as Value);

/**
 * Provider
 */
export const MultipleProvider = ({ children }: Child) => {
  // 何問目
  const [index, setIndex] = useState<number>(0);
  // 式の項
  const [termA, setTermA] = useState<number>(0);
  const [termB, setTermB] = useState<number>(0);
  // 答え
  const [thisAnswer, setThisAnswer] = useState<number>(10000);
  // インプットした文字
  const [inputAsAnswer, setInputAsAnswer] = useState<string>('');

  // index変更
  const setCount = (num: 1 | 0 = 1) => {
    if (num === 0) setIndex(0);
    else setIndex((i) => (i += 1));
  };
  // 初期化
  useEffect(() => {
    setCount(0);
  }, []);
  // indexが変わるたびに式の項が変わる
  useEffect(() => {
    setTermA(generateRandomNum(MAX_NUM));
    setTermB(generateRandomNum(MAX_NUM));
  }, [index]);

  const getThisAnswer = (a: number, b: number) => {
    setThisAnswer(a * b);
  };
  useEffect(() => {
    getThisAnswer(termA, termB);
  }, [termA]);

  // インプット文字列変更
  const setInputValue = (value?: string) => {
    // 文字列変更
    console.log(`value: ${value}`);

    if (value) {
      console.log('true');
      setInputAsAnswer(value);
    } else setInputAsAnswer('');
  };
  const updateAnswer = (value: string): void => {
    if (value === '0') value = '';
    if (value.length > 0) value = value.replace(/[^0-9]/g, '');

    setInputValue(value);

    const inputNum = Number(value);
    manageAnswer(inputNum);
  };

  const manageAnswer = (num: number) => {
    console.log(`答え: ${thisAnswer} / 回答: ${num}`);

    // 正解時
    if (num === thisAnswer) {
      console.log('正解');
      // データ登録
      addRecord();

      if (index < QUESTION_AMOUNT - 1) {
        // 次へ
        setCount();
        // 間違えた回数クリア
        setMistakesCount(0);
        // インプットクリア
        setInputValue();
      } else {
        setCount(0);
        setMistakesCount(0);
        setMode('result');
      }
    }

    // 大きい数を入力した時
    if (num > thisAnswer) {
      console.log('大きすぎる');
      setInputAsAnswer('');
      setMistakesCount();
    }

    // 小さい数を入力している場合
    if (num < thisAnswer) {
      console.log('小さい');
      if (thisAnswer === thisAnswer % 10 ** inputAsAnswer.length) {
        setInputAsAnswer('');
        setMistakesCount();
      }
    }
  };

  // タイマー
  const [time, setTime] = useState<number>(0);
  const { timerControl } = useInterval({
    onUpdate: () => {
      setTime((t) => t + 1);
    },
  });

  // 間違えた回数
  const [mistakes, setMistakes] = useState<number>(0);
  const setMistakesCount = (num: 1 | 0 = 1) => {
    if (num === 0) setMistakes(0);
    else setMistakes((c) => (c += 1));
  };

  // 成績
  const [records, setRecords] = useState<ResultRecordType[]>([]);
  // 成績保存
  const addRecord = (): void => {
    const newRecord: ResultRecordType = {
      no: index + 1,
      termA,
      termB,
      mistakes,
      time,
    };
    setRecords((prev) => [...prev, newRecord]);
  };

  // ページ表示モード
  const [mode, setMode] = useState<PageModeType>('calc');
  // // モード変更
  // const changeMode = (modeName: PageModeType): void => {
  //   setMode(modeName);
  // };

  // context
  const value: Value = {
    // amount: QUESTION_AMOUNT,
    index,
    setCount,
    thisAnswer,
    updateAnswer,
    inputAsAnswer,
    // setInputAsAnswer,
    mistakes,
    setMistakesCount,
    time,
    records,
    termA,
    termB,
    addRecord,
    timerControl,
    mode,
    // changeMode,
    // numAarray,
  };

  return <MultipleContext.Provider value={value}>{children}</MultipleContext.Provider>;
};
