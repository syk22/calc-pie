import { useEffect, useRef, useState } from 'react';
import { FnType } from '../types/multipleTypes';

interface Props {
  onUpdate: FnType;
}

interface Control {
  timerControl: FnType;
  timerStart: FnType;
  timerEnd: FnType;
}

export const useInterval = ({ onUpdate }: Props): Control => {
  const onUpdateRef = useRef<FnType>();

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerControl: FnType = () => setIsRunning((bool) => !bool);
  const timerStart: FnType = () => setIsRunning(true);
  const timerEnd: FnType = () => setIsRunning(false);
  // const timerControl: FnType = () => setIsRunning((bool) => !bool);
  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, []);
  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (isRunning) {
      timerId = setInterval(() => onUpdateRef.current?.(), 10);
    } else {
      timerId && clearInterval(timerId);
    }
    return () => timerId && clearInterval(timerId);
  }, [isRunning]);
  return { timerControl, timerStart, timerEnd };
};
