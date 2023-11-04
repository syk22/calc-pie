import { css } from '../../../styled-system/css';

interface Props {
  multipleNumA: number;
}

export const MultipleA = ({ multipleNumA }: Props) => {
  return <span className={css({ fontSize: '5xl', fontWeight: '600' })}>{multipleNumA}</span>;
};
