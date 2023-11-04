import { useContext } from 'react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';
import { InputAnswer } from './InputAnswer';
import { MultipleTerm } from './MultipleTerm';
import { MultipleContext } from '../../providers/MultipleProvider';

export const CompMultipleLine = () => {
  const { index, mistakes, inputAsAnswer, termA, termB } = useContext(MultipleContext);

  return (
    <>
      <div className={flex({ alignItems: 'center', justifyContent: 'space-around' })}>
        <MultipleTerm multipleNum={termA} />
        <span className={css({ fontSize: '4xl' })}>x</span>
        <MultipleTerm multipleNum={termB} />
        <span className={css({ fontSize: '4xl' })}> = </span>
        <InputAnswer />
      </div>
      <p>input: {inputAsAnswer}</p>
      <p>No: {index + 1}</p>
      <p>mistakes: {mistakes}</p>
      <p>Answer: {termA * termB}</p>
    </>
  );
};
