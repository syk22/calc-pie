import { useContext } from 'react';
import { MultipleContext } from '../../providers/MultipleProvider';

export const InputAnswer = () => {
  const { updateAnswer, inputAsAnswer } = useContext(MultipleContext);
  const handleInput = (value: string) => {
    if (value === '0') value = '';
    if (value.length > 0) value = value.replace(/[^0-9]/g, '');
    updateAnswer(value);
  };
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        name="multipleInput"
        maxLength={10}
        value={inputAsAnswer}
        onChange={(e) => handleInput(e.target.value)}
      />
    </>
  );
};
