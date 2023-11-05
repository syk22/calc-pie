import { ReactNode, createContext, useEffect, useState } from 'react';

import { useInterval } from '../hooks/useInterval';
import { generateRandomNum, getThisAnswer } from '../logic/multipleLogic';

import { PageModeType, ResultRecordType, Value } from '../types/multipleTypes';

// interface
interface Child {
  children: ReactNode;
}

// 定数
const QUESTION_AMOUNT = 20;
const MAX_NUM = 10;

// コンテキスト作成
export const MultipleContext = createContext({} as Value);

// Provider
export const MultipleProvider = ({ children }: Child) => {
  /**
   * プリミティブ値
   */
  // 何問目
  const [index, setIndex] = useState<number>(0);

  // 式の項
  const [termA, setTermA] = useState<number>(0);
  const [termB, setTermB] = useState<number>(0);

  // 答え
  const [thisAnswer, setThisAnswer] = useState<number>(10000);

  // インプットした文字
  const [inputAsAnswer, setInputAsAnswer] = useState<string>('');

  // 正解・不正解
  const [resultText, setResultText] = useState<string>('');

  // タイマー
  const [time, setTime] = useState<number>(0);

  // 間違えた回数
  const [mistakes, setMistakes] = useState<number>(0);

  // 成績
  const [records, setRecords] = useState<ResultRecordType[]>([]);

  // ページ表示モード
  const [mode, setMode] = useState<PageModeType>('calc');

  /**
   * ロジック
   */
  // index, 式の項変更
  // index変更
  const setCount = (num: 1 | 0 = 1) => {
    if (num === 0) {
      setIndex(1);
      setIndex(0);
    } else {
      setIndex((i) => (i += 1));
    }
  };

  // index初期化
  useEffect(() => {
    setCount(0);
  }, []);

  // indexが変わるたびに式の項が変わる
  useEffect(() => {
    setTermA(generateRandomNum(MAX_NUM));
    setTermB(generateRandomNum(MAX_NUM));
  }, [index]);

  // 項が変わるたびに答えを算出
  useEffect(() => {
    setThisAnswer(getThisAnswer(termA, termB));
  }, [termA, termB]);

  /**
   * インプット処理
   */
  // インプット文字列変更
  const setInputValue = (value?: string) => {
    // undefinedの時は空文字
    if (!value) value = '';
    setInputAsAnswer(value);
  };

  // インプット文字を受け取った後
  const updateAnswer = (value: string): void => {
    // 先頭０は削除
    if (value === '0') value = '';
    // 数字以外は削除
    if (value.length > 0) value = value.replace(/[^0-9]/g, '');
    // インプットとして表示
    setInputValue(value);

    // 回答が合っているか判定
    const inputNum = Number(value);
    manageAnswer(inputNum);
  };

  // インプットされた値の判定
  const manageAnswer = (num: number) => {
    // console.log(`答え: ${thisAnswer} / 回答: ${num}`);

    // 正解時
    if (num === thisAnswer) {
      // データ登録
      addRecord();

      // 間違えた回数クリア
      setMistakesCount(0);
      // 正解
      changeResultText('正解✅');
      // タイマーとめる
      timerControl();

      if (index < QUESTION_AMOUNT - 1) {
        setTimeout(() => {
          // インプットクリア
          setInputValue();
          // 次へ
          setCount();
          // 答え作成
          getThisAnswer(termA, termB);
          // タイマー開始
          timerControl();
        }, 500);
      } else {
        // 成績ページへ
        setMode('result');
        // インプットクリア
        setInputValue();
        // タイマーリセット
        setTime(0);
        // 問題数リセット
        setCount(0);
      }
    }

    // 大きい数を入力した時
    if (num > thisAnswer) {
      changeResultText('まちがい❌');
      // インプットクリア
      setInputAsAnswer('');
      // 間違いカウントアップ
      setMistakesCount();
    }

    // 小さい数を入力している場合
    if (num < thisAnswer) {
      // if (thisAnswer === thisAnswer % 10 ** (inputAsAnswer.length - 1)) {
      // 桁数が同じな場合はクリアする
      if (String(thisAnswer).length === inputAsAnswer.length) {
        changeResultText('まちがい❌');
        // インプットクリア
        setInputAsAnswer('');
        // 間違いカウントアップ
        setMistakesCount();
      }
    }
  };

  // 正解と間違いの表記
  const changeResultText = async (text: string) => {
    setResultText(text);
    await setTimeout(() => setResultText(''), 500);
  };

  // タイマー設定
  const { timerControl } = useInterval({
    onUpdate: () => {
      setTime((t) => t + 1);
    },
  });

  // 間違いの数カウント
  const setMistakesCount = (num: 1 | 0 = 1) => {
    if (num === 0) setMistakes(0);
    else setMistakes((c) => (c += 1));
  };

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

  // 成績クリア
  const clearRecord = (): void => {
    setRecords([]);
  };

  // モード変更
  const changeMode = (modeName: PageModeType): void => {
    setMode(modeName);
    timerControl();
  };

  // context
  const value: Value = {
    amount: QUESTION_AMOUNT,
    index,
    thisAnswer,
    inputAsAnswer,
    resultText,
    mistakes,
    time,
    records,
    termA,
    termB,
    mode,
    setCount,
    updateAnswer,
    setMistakesCount,
    clearRecord,
    addRecord,
    timerControl,
    changeMode,
  };

  return <MultipleContext.Provider value={value}>{children}</MultipleContext.Provider>;
};
