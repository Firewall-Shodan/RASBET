import { Box, Outlet } from '~/modules';

const RootAuth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default RootAuth;
