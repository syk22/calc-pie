import { useEffect, useState } from 'react';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';
import { InputAnswer } from './parts/InputAnswer';
import { MultipleA } from './parts/MultipleA';
import { MultipleB } from './parts/MultipleB';
// import { Timer } from './parts/Timer';

export const MultipleBlock = () => {
  const [answer, setAnswer] = useState<string>('');
  const updateAnswer = (value: string): void => {
    setAnswer(value);
  };

  const numA = 5;
  const numB = 70;
  const ans = numA * numB;

  useEffect(() => {
    const answerNum = Number(answer);
    // 正解の時
    // if (answerNum === ans) setAnswer('');
    // 大きい数を入力した時
    if (answerNum > ans) setAnswer('');
    // 小さい数を入力している場合
    if (answerNum < ans) {
      if (ans === ans % 10 ** answer.length) setAnswer('');
    }
  }, [answer]);

  return (
    <>
      <div className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <MultipleA multipleNum={numA} />
        <span className={css({ fontSize: '4xl' })}>x</span>
        <MultipleB multipleNum={numB} />
        <span className={css({ fontSize: '4xl' })}> = </span>
        <InputAnswer updateAnswer={updateAnswer} inputValue={answer} />
      </div>
      <p>input: {answer}</p>
      {/* <Timer /> */}
    </>
  );
};
