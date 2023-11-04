import { useEffect } from 'react';
interface Props {
  onUpdate: () => void;
}

export const useInterval = ({ onUpdate }: Props) => {
  useEffect(() => {
    const timerId = setInterval(() => onUpdate(), 10);
    return () => clearInterval(timerId);
  });
};
