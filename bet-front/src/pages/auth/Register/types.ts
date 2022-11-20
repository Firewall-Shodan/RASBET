import { yup } from '~/modules';

export const formValidation = yup.object({
  fullName: yup.string().required('Informe o seu nome'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .max(255)
    .required('Informe o seu e-mail'),
  password: yup.string().max(255).required('Informe a sua senha'),
  c_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas não correspondentes'),
  nif: yup.string().required('Informe o NIF da empresa'),
});
