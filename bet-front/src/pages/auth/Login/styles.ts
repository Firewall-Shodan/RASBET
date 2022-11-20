import { Box, styled } from '~/modules';

export const Right = styled('div')(({ theme }) => ({
  width: 450,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: 'white',
  alignSelf: 'center',
  boxShadow: '-1px 0 3px #d6d6d6',
  [theme.breakpoints.down('md')]: {
    flex: '1 1 auto',
  },
}));

export const FormBox = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  minHeight: '100%',
}));
