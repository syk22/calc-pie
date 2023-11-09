import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MultipleContext } from '../providers/MultipleProvider';

export const TopPage = () => {
  const { amount, maxNum, setCount, setTime, timerStart, setMistakesCount, clearRecord, changeMode } =
    useContext(MultipleContext);
  const startGame = async () => {
    changeMode('calc');
    await setCount(0);
    setMistakesCount(0);
    clearRecord();
    await setTime(0);
    timerStart();
  };
  return (
    <>
      <h1>計算いっぱい</h1>
      <h2>かけ算</h2>
      <h3>
        {maxNum}*{maxNum}
      </h3>
      <p>
        <Link to={'multiple'}>
          <button onClick={async () => await startGame()}> {amount}問スタート </button>
        </Link>
      </p>
    </>
  );
};
