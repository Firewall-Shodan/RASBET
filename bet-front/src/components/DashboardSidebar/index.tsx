import { Box, Drawer, useMediaQuery, Theme, List } from '~/modules';
import { useEffect } from 'react';

import NavItem from '../NavItem';
import { items } from './data';
import { Props } from './types';

export const DashboardSidebar = ({ onClose, open }: Props) => {
  const lgUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, []);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ mt: 8 }} />
      <List component="nav" sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
            items={item.items}
            onClose={lgUp ? undefined : onClose}
          />
        ))}
      </List>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.main',
            color: '#000',
            width: 260,
            border: 'none',
            boxShadow: '0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)',
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'background.main',
          color: '#000',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
