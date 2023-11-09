import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { flex } from '../../styled-system/patterns';

import { MultipleContext } from '../providers/MultipleProvider';

import { ResultRecordType } from '../types/multipleTypes';

// １つずつの計算結果
const writeRow = (data: ResultRecordType) => {
  const { no, termA, termB, mistakes, time } = data;
  return (
    <>
      <p>No: {no}</p>
      <p>
        Expression: {termA} * {termB}
      </p>
      <p>Answer: {termA * termB}</p>
      <p>Mistakes: {mistakes}</p>
      <p>Time: {(time / 100).toFixed(2)} sec.</p>
    </>
  );
};

export const CalcMultipleResult = () => {
  // 計算結果
  const { records, setTime, timerEnd, setCount, clearRecord, changeMode } = useContext(MultipleContext);

  const resetGame = async () => {
    clearRecord();
    timerEnd();
    await setTime(0);
    await setCount(0);
  };
  const continueGame = () => {
    resetGame();
    changeMode('calc');
  };

  return (
    <>
      <h1 className="result-title">成績</h1>
      {records.map((v, i) => {
        return (
          <div key={'key' + i.toString()} className="result">
            {writeRow(v)}
          </div>
        );
      })}
      <p className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <button onClick={continueGame}>もう一度</button>
      </p>
      <p className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <Link to={'/'}>
          <button onClick={resetGame}>トップページに戻る</button>
        </Link>
      </p>
    </>
  );
};
