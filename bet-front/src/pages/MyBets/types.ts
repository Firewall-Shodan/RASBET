import { yup } from '~/modules';

export const formValidation = yup.object().shape({
  amount: yup.string().required('Informe o valor do saque'),
  bankAccountId: yup.string().required('Selecione uma conta bancária'),
});
