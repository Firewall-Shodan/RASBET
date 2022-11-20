import { useAppDispatch } from '~/hooks';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '~/modules';
import { addOdd } from '~/redux/features';
import { useState } from 'react';

import { TeamProps } from './types';

const Team = ({ data, gameId, side }: TeamProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const [odd, setOdd] = useState(-1);
  const [text, setText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setText('');
    setOpen(false);
  };

  const handleOnSave = () => {
    dispatch(addOdd({ gameId, [side]: Number(text) }));

    if (text === '') {
      setOdd(-1);
      return;
    }

    setOdd(Number(text));

    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          border: '1px solid',
          padding: 1,
          borderRadius: 0.5,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">{data.team}</Typography>
        <Typography
          onClick={() => handleClickOpen()}
          variant="body2"
          sx={{
            textDecoration: 'underline',
            color: '#3832A0',
            cursor: 'pointer',
          }}
        >
          {odd === -1 ? 'Inserir odd' : odd.toFixed(1)}
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{data.team}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>Odd</Typography>
            <TextField
              value={text}
              onChange={(input) => setText(input.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {odd !== -1 && (
            <Button
              onClick={() => {
                setOdd(-1);
                handleClose();
              }}
              color="primary"
              variant="outlined"
            >
              Limpar
            </Button>
          )}
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={handleOnSave}
            color="primary"
            autoFocus
            variant="contained"
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Team;
