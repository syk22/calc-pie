import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';

export const Timer = () => {
  const [timer, setTimer] = useState<number>(0);
  const { timerControl } = useInterval({
    onUpdate: () => {
      setTimer((t) => t + 1);
    },
  });
  return (
    <>
      <p>Time: {(timer / 100).toFixed(2)}</p>
      <button onClick={() => timerControl()}>stop / start</button>
    </>
  );
};
