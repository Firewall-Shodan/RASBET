import MuiButton from '@mui/material/Button';
import { Loading } from '~/modules';

import { Props } from './types';

export default function Button({ text, isLoading, ...rest }: Props) {
  return (
    <MuiButton {...rest}>
      {isLoading ? (
        <Loading type="spin" width={18} height={18} color="#696cff" />
      ) : (
        text
      )}
    </MuiButton>
  );
}
