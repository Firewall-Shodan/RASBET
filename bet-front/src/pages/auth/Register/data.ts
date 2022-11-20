export const steps = ['Representante', 'Empresa', 'Cobrança'];

export const plans = [
  {
    key: 'basic',
    title: 'Básico',
    desc: 'Um jeito fácil de começar',
    price: 2451.32,
    points: [
      {
        exist: true,
        text: '1 Sistema de Pagamento',
      },
      {
        exist: false,
        text: 'Relatórios',
      },
      {
        exist: false,
        text: 'Exportação de dados',
      },
    ],
  },
  {
    key: 'standard',
    title: 'Standard',
    desc: 'Recomendado para empresas de médio porte',
    price: 3579.98,
    points: [
      {
        exist: true,
        text: '3 Sistemas de Pagamento',
      },
      {
        exist: true,
        text: 'Relatórios',
      },
      {
        exist: false,
        text: 'Exportação de dados',
      },
    ],
  },
  {
    key: 'enterprise',
    title: 'Enterprise',
    desc: 'Recomendado para empresa com grande fluxo de vendas',
    price: 5200.78,
    points: [
      {
        exist: true,
        text: '3+ Sistemas de Pagamento',
      },
      {
        exist: true,
        text: 'Relatórios',
      },
      {
        exist: true,
        text: 'Exportação de dados',
      },
    ],
  },
];
