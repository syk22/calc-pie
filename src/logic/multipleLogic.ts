export const generateRandomNum = (max: number) => {
  const randomNum = () => {
    return Math.ceil(Math.random() * max);
  };
  let term = randomNum();
  if (term === 0) while (term === 0) term = randomNum();
  return term;
};

export const getThisAnswer = (a: number, b: number) => {
  return a * b;
};
