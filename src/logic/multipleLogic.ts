export const generateRandomNum = (max: number) => {
  const randomNum = () => {
    let i = 0;
    do i = Math.ceil((Math.random() * 1000) / max);
    while (i === 0 || i > max);
    return i;
  };

  return randomNum();
};

export const getThisAnswer = (a: number, b: number) => {
  return a * b;
};
