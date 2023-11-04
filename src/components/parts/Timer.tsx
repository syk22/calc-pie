import { useContext } from 'react';

import { MultipleContext } from '../../providers/MultipleProvider';

export const Timer = () => {
  const { time, timerControl } = useContext(MultipleContext);
  return (
    <>
      <p>Time: {(time / 100).toFixed(2)}</p>
      <button onClick={() => timerControl()}>stop / start</button>
    </>
  );
};
