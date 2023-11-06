import { useContext } from 'react';
import { css } from '../../../styled-system/css';
import { MultipleContext } from '../../providers/MultipleProvider';

export const NumDisplay = () => {
  const { amount, index, resultText } = useContext(MultipleContext);
  return (
    <p>
      <span className={css({ fontSize: '3xl' })}>No: {index + 1}</span>
      <span className={css({ fontSize: 'xl' })}> / {amount}</span>
      <span className={css({ fontSize: '2xl' })}> {resultText}</span>
    </p>
  );
};
