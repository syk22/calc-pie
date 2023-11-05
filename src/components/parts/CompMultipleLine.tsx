import { useContext } from 'react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';
import { InputAnswer } from './InputAnswer';
import { MultipleTerm } from './MultipleTerm';
import { MultipleContext } from '../../providers/MultipleProvider';
import { NoDisplay } from './NoDisplay';

export const CompMultipleLine = () => {
  const { mistakes, termA, termB } = useContext(MultipleContext);

  return (
    <>
      <NoDisplay />
      <div className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <MultipleTerm multipleNum={termA} />
        <span className={css({ fontSize: '4xl' })}>x</span>
        <MultipleTerm multipleNum={termB} />
        <span className={css({ fontSize: '4xl' })}> = </span>
        <InputAnswer />
      </div>
      {/* <p>input: {inputAsAnswer}</p> */}
      <p>mistakes: {mistakes}</p>
      {/* <p>Answer: {termA * termB}</p> */}
    </>
  );
};
