import { blue, red } from '@mui/material/colors';
import { ApiIcon, PersonIcon, CurrencyExchangeIcon } from '~/modules';

export const menus = [
  {
    href: '/profile',
    icon: <PersonIcon fontSize="small" sx={{ color: blue.A400 }} />,
    title: 'Perfil',
  },
  {
    href: '/withdrawals',
    icon: <CurrencyExchangeIcon fontSize="small" sx={{ color: red['400'] }} />,
    title: 'Saque',
  },
  {
    href: '/api',
    icon: <ApiIcon fontSize="small" sx={{ color: blue }} />,
    title: 'API',
  },
];
