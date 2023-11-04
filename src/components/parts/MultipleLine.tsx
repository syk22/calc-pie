import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';
import { InputAnswer } from './InputAnswer';
import { MultipleTerm } from './MultipleTerm';
// import { MultipleA } from './MultipleA';
// import { MultipleB } from './MultipleB';

interface Props {
  numAarray: number[];
  numBarray: number[];
}

let index = 0;
let mistakesNum = 0;

export const MultipleLine = (props: Props) => {
  const { numAarray, numBarray } = props;
  const [inputAsAnswer, setInputAsAnswer] = useState<string>('');
  const updateAnswer = (value: string): void => {
    setInputAsAnswer(value);
  };

  console.log('in ');
  console.log(numAarray);
  console.log(numBarray);

  useEffect(() => {
    const inputAnsNum = Number(inputAsAnswer);
    const correctAnsNum = numAarray[index] * numBarray[index];
    console.log(`答え： ${correctAnsNum}`);

    // 正解の時
    if (inputAnsNum === correctAnsNum) {
      console.log('正解');
      setInputAsAnswer('');
      index += 1;
      mistakesNum = 0;
    }
    // 大きい数を入力した時
    if (inputAnsNum > correctAnsNum) {
      console.log('大きすぎる');
      setInputAsAnswer('');
      mistakesNum++;
    }
    // 小さい数を入力している場合
    if (inputAnsNum < correctAnsNum) {
      if (correctAnsNum === correctAnsNum % 10 ** inputAsAnswer.length) {
        setInputAsAnswer('');
        mistakesNum++;
      }
    }
    console.log(`間違った回数: ${mistakesNum}`);
  }, [inputAsAnswer]);

  return (
    <>
      <div className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <MultipleTerm multipleNum={numAarray[index]} />
        {/* <MultipleA multipleNum={numAarray[index]} /> */}
        <span className={css({ fontSize: '4xl' })}>x</span>
        <MultipleTerm multipleNum={numBarray[index]} />
        {/* <MultipleA multipleNum={numBarray[index]} /> */}
        <span className={css({ fontSize: '4xl' })}> = </span>
        <InputAnswer updateAnswer={updateAnswer} inputValue={inputAsAnswer} />
      </div>
      <p>input: {inputAsAnswer}</p>
      <p>index: {index}</p>
      <p>mistakes: {mistakesNum}</p>
    </>
  );
};
