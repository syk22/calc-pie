export const generateRandomNum = (max: number) => {
  const randomNum = () => {
    const powerNum = 10 ** String(max).length;
    return Math.ceil(Math.random() * powerNum);
  };

  let term = 0;
  do {
    term = randomNum();
  } while (term === 0 || term > max);
  return term;
};

export const getThisAnswer = (a: number, b: number) => {
  return a * b;
};
