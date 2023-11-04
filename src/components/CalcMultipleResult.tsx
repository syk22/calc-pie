import { useContext } from 'react';

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
  const { records } = useContext(MultipleContext);

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
    </>
  );
};
