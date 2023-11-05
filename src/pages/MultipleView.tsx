import { useContext } from 'react';
import { CalcMultiple } from '../components/CalcMultiple';
import { CalcMultipleResult } from '../components/CalcMultipleResult';
import { MultipleContext } from '../providers/MultipleProvider';

export const MultipleView = () => {
  const { mode } = useContext(MultipleContext);

  return <>{mode === 'calc' ? <CalcMultiple /> : <CalcMultipleResult />}</>;
};
