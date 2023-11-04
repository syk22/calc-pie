import { useRef } from 'react';

interface Props {
  updateAnswer: (arg0: string) => void;
  inputValue: string;
}

export const InputAnswer = ({ updateAnswer, inputValue }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInput = (value: string) => {
    if (value === '0') value = '';
    if (value.length > 0) value = value.replace(/[^0-9]/g, '');
    if (inputRef.current) inputRef.current.value = value;
    updateAnswer(value);
  };
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        maxLength={10}
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
        ref={inputRef}
      />
    </>
  );
};
