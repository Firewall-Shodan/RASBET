import {
  Box,
  Collapse,
  FiberManualRecordIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowRightIcon,
  List,
  ListItem,
  useLocation,
  useNavigate,
} from '~/modules';
import { useState } from 'react';

import { NavButton } from './styles';
import { Props } from './types';

const NavItem = (props: Props) => {
  const { href, onClose, items } = props;

  const navigate = useNavigate();

  const location = useLocation();

  const active = location?.pathname === href;

  const go = () => {
    if (onClose) onClose();

    if (href) navigate(href);
  };

  return items ? (
    <MultiLevel {...props} active={active} />
  ) : (
    <SingleLevel {...props} go={go} active={active} />
  );
};

const SingleLevel = ({ icon, active, title, go }: any) => (
  <ListItem
    disableGutters
    sx={{
      display: 'flex',
      mb: 0.5,
      py: 0,
      px: 2,
    }}
  >
    <NavButton
      startIcon={icon}
      onClick={go}
      disableRipple
      sx={{
        backgroundColor: active ? 'primary.light' : null,
        fontWeight: active ? 700 : 500,
        color: active ? 'primary.main' : 'neutral.500',
        borderRadius: 0.6,
        justifyContent: 'flex-start',
        px: 3,
        py: 2.7,
        textAlign: 'left',
        textTransform: 'none',
        width: '100%',
        '& .MuiButton-startIcon': {
          color: active ? 'primary.main' : 'neutral.500',
        },
        '&:hover': {
          backgroundColor: active ? 'primary.light' : 'neutral.100',
        },
      }}
    >
      <Box sx={{ flexGrow: 1 }}>{title}</Box>
    </NavButton>
  </ListItem>
);

const MultiLevel = ({ icon, active, title, items, onClose }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          mb: 0.5,
          py: 0,
          px: 2,
        }}
      >
        <NavButton
          startIcon={icon}
          onClick={handleClick}
          disableRipple
          sx={{
            backgroundColor: active ? 'primary.light' : null,
            fontWeight: active ? 700 : 500,
            color: active ? 'primary.main' : 'neutral.500',
            borderRadius: 0.6,
            justifyContent: 'flex-start',
            pl: 3,
            py: 2.7,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'primary.main' : 'neutral.500',
            },
            '&:hover': {
              backgroundColor: active ? 'primary.light' : 'neutral.100',
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {title}
            <Box sx={{ mr: -1.3, p: 0, display: 'flex', alignItems: 'center' }}>
              {open ? (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{ color: 'neutral.500' }}
                />
              ) : (
                <KeyboardArrowRightIcon
                  fontSize="small"
                  sx={{ color: 'neutral.500' }}
                />
              )}
            </Box>
          </Box>
        </NavButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {items.map((item: IMenuItem) => (
            <NavItem
              key={item.href}
              {...item}
              icon={<FiberManualRecordIcon />}
              onClose={onClose}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NavItem;
