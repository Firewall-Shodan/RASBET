import { OutlinedInputProps } from '@mui/material';
import { Control } from 'react-hook-form';

export type Props = OutlinedInputProps & {
  name: string;
  control: Control<any, any>;
  label?: string;
  errors?: string | undefined;
};
