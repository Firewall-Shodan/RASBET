import { yup } from '~/modules';

export const formValidation = yup.object({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .max(255)
    .required('Informe o seu e-mail'),
  password: yup.string().max(255).required('Informe a sua senha'),
});
