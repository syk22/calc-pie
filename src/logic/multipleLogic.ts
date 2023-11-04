const generateRandomNum = (max: number) => {
  return Math.ceil(Math.random() * max);
};

export const getNewArray = (amount: number, max: number): number[] => {
  const returnArray: number[] = [];
  for (let _ = 0; _ < amount; _++) {
    let a = 0;
    while (a === 0) a = generateRandomNum(max);
    returnArray.push(a);
  }
  return returnArray;
};
