import { Control } from 'react-hook-form';

export type Props = {
  name: string;
  control: Control<any, any>;
  label?: string;
  errors?: string | undefined;
};
