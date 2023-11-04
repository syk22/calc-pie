export const generateRandomNum = (max: number) => {
  const randomNum = () => {
    return Math.ceil(Math.random() * max);
  };
  let term = randomNum();
  if (term === 0) while (term === 0) term = randomNum();
  console.log(term);
  return term;
};

// export const getNewArray = (amount: number, max: number): number[] => {
//   const returnArray: number[] = [];
//   for (let _ = 0; _ < amount; _++) {
//     let a = 0;
//     while (a === 0) a = generateRandomNum(max);
//     returnArray.push(a);
//   }
//   return returnArray;
// };
