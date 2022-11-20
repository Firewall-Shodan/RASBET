import {
  Controller,
  OutlinedInput,
  FormLabel,
  NumberFormat,
  FormHelperText,
} from '~/modules';

import { Props } from './types';

export default function InputNumber({ name, control, label, errors }: Props) {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, name, ref, value } }) => (
          <NumberFormat
            ref={ref}
            value={value}
            onChange={onChange}
            name={name}
            onBlur={onBlur}
            fixedDecimalScale
            allowNegative={false}
            decimalScale={2}
            thousandSeparator="."
            decimalSeparator=","
            error={Boolean(errors)}
            customInput={OutlinedInput}
          />
        )}
      />

      <FormHelperText error={Boolean(errors)}>{errors}</FormHelperText>
    </>
  );
}
