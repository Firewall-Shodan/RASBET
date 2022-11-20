import { Props } from './types';

const If = ({ condiction, children }: Props) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return condiction ? <>{children}</> : <></>;
};

export default If;
