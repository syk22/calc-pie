import { useContext } from 'react';

import { MultipleContext } from '../../providers/MultipleProvider';

export const Timer = () => {
  const { time } = useContext(MultipleContext);
  return (
    <>
      <p>Time: {(time / 100).toFixed(2)}</p>
    </>
  );
};
