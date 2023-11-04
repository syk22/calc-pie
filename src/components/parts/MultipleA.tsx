import { css } from '../../../styled-system/css';

interface Props {
  multipleNum: number;
}

export const MultipleA = ({ multipleNum }: Props) => {
  return <span className={css({ fontSize: '5xl', fontWeight: '600' })}>{multipleNum}</span>;
};
