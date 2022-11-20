import { FormHelperText } from '@mui/material';
import Label from '@mui/material/FormLabel';
import { Controller, OutlinedInput } from '~/modules';

import { Props } from './types';

export default function TextInput({
  name,
  control,
  label,
  errors,
  ...rest
}: Props) {
  return (
    <>
      {label && <Label>{label}</Label>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, name, ref, value } }) => (
          <OutlinedInput
            error={Boolean(errors)}
            ref={ref}
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            {...rest}
          />
        )}
      />

      <FormHelperText error={Boolean(errors)}>{errors}</FormHelperText>
    </>
  );
}
