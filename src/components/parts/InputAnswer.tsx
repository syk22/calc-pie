import { useContext, useRef } from 'react';
import { MultipleContext } from '../../providers/MultipleProvider';

export const InputAnswer = () => {
  const { updateAnswer, inputAsAnswer } = useContext(MultipleContext);
  const handleInput = (value: string) => {
    if (value === '0') value = '';
    if (value.length > 0) value = value.replace(/[^0-9]/g, '');
    updateAnswer(value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  inputRef.current?.focus();

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        name="multipleInput"
        maxLength={10}
        value={inputAsAnswer}
        onChange={(e) => handleInput(e.target.value)}
        ref={inputRef}
      />
    </>
  );
};
