import { red } from '@mui/material/colors';
import { useAppDispatch } from '~/hooks';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  styled,
  MenuIcon,
  SearchIcon,
  AccountCircleIcon,
  Button,
  MenuItem,
  ListItemIcon,
  Typography,
  LogoutIcon,
  Menu,
  useNavigate,
} from '~/modules';
import { useState } from 'react';
import { logout } from 'src/redux/features';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
}));

export const DashboardNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <Container>
      <DashboardNavbarRoot>
        <Toolbar>
          <IconButton
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />

          <Button
            color="primary"
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            Home
          </Button>

          <Button
            color="primary"
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate('/my-bets')}
          >
            Minhas Apostas
          </Button>

          <Button
            color="primary"
            variant="outlined"
            onClick={() => navigate('specialist')}
          >
            Especialista
          </Button>

          <IconButton
            onClick={handleMenu}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.2))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {/* {menus.map((menu) => (
              <MenuItem key={menu.href} onClick={() => navigate(menu.href)}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <Typography variant="body2">{menu.title}</Typography>
              </MenuItem>
            ))} */}
            {/* <Divider /> */}
            <MenuItem onClick={signOut}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" sx={{ color: red.A400 }} />
              </ListItemIcon>
              <Typography variant="body2">Terminar Sessão</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </DashboardNavbarRoot>
    </Container>
  );
};
