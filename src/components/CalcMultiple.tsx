import { memo, useState } from 'react';

import { getNewArray } from '../logic/multipleLogic';

import { Record } from '../types/multipleTypes';

import { MultipleLine } from './parts/MultipleLine';

export const CalcMultiple = memo(() => {
  const questionAmount = 5;
  const maxNum = 25;
  const numAarray: number[] = getNewArray(questionAmount, maxNum);
  const numBarray: number[] = getNewArray(questionAmount, maxNum);

  const [records, setRecords] = useState<Record[]>([]);
  const addNewRecord = (data: Record) => {
    setRecords((prev) => [...prev, data]);
  };
  console.log('records');
  console.log(records);

  return (
    <>
      <MultipleLine numAarray={numAarray} numBarray={numBarray} addNewRecord={addNewRecord} />
    </>
  );
});
