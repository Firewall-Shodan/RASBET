import { styled, Typography } from '~/modules';

export const Left = styled('div')(({ theme }) => ({
  flex: '0 0 450px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const FormBox = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 750,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const Price = styled(Typography)(({ theme }) => ({
  price: {
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
    },
  },
}));
