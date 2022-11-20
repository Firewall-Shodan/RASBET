import { DashboardIcon, CreditCardIcon, SettingsIcon } from '~/modules';

export const items: IMenuItem[] = [
  {
    href: '/',
    icon: <DashboardIcon fontSize="small" />,
    title: 'Dashboard',
  },
  {
    href: '/pricing',
    icon: <CreditCardIcon fontSize="small" />,
    title: 'Subscrição',
  },
  {
    href: '/settings',
    icon: <SettingsIcon fontSize="small" />,
    title: 'Configurações',
    items: [
      {
        href: '/settings/bank-accounts',
        title: 'Contas Bancárias',
      },
    ],
  },
];
