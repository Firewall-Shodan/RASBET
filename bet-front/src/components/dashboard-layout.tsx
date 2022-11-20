import { Box, Container } from '~/modules';
import React from 'react';

import { DashboardNavbar } from './DashboardNavbar';

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 11,
        }}
      >
        <Container maxWidth={false}>{children}</Container>
      </Box>

      <DashboardNavbar />
    </>
  );
};
