import { memo } from 'react';
import { MultipleLine } from './parts/MultipleLine';

const generateRandomNum = (max: number) => {
  return Math.ceil(Math.random() * max);
};

export const CalcMultiple = memo(() => {
  const questionAmount = 20;
  const maxNum = 25;
  const numAarray: number[] = [];
  const numBarray: number[] = [];

  for (let _ = 0; _ < questionAmount; _++) {
    let a = 0;
    let b = 0;
    while (a === 0) a = generateRandomNum(maxNum);
    numAarray.push(a);

    while (b === 0) b = generateRandomNum(maxNum);
    numBarray.push(b);
  }

  return <MultipleLine numAarray={numAarray} numBarray={numBarray} />;
});
