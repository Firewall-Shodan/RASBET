import { ButtonProps } from '@mui/material';

export type Props = ButtonProps & {
  text: string;
  isLoading?: boolean;
};
