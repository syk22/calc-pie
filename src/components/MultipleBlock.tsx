import { useState } from 'react';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';
import { InputAnswer } from './parts/InputAnswer';
import { MultipleA } from './parts/MultipleA';
import { MultipleB } from './parts/MultipleB';
// import { Timer } from './parts/Timer';

export const MultipleBlock = () => {
  const [answer, setAnswer] = useState<string>('');
  const updateAnswer = (value: string): void => setAnswer(value);

  return (
    <>
      <div>⭕️</div>
      <div>✖️</div>
      <div className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <MultipleA multipleNumA={1} />
        <span className={css({ fontSize: '4xl' })}>x</span>
        <MultipleB />
        <span className={css({ fontSize: '4xl' })}> = </span>
        <InputAnswer updateAnswer={updateAnswer} />
      </div>
      <p>input: {answer}</p>
      {/* <Timer /> */}
    </>
  );
};
