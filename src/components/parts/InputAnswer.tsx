interface Props {
  updateAnswer: (arg0: string) => void;
}

export const InputAnswer = ({ updateAnswer }: Props) => {
  return <input type="text" inputMode="numeric" maxLength={10} onChange={(e) => updateAnswer(e.target.value)} />;
};
