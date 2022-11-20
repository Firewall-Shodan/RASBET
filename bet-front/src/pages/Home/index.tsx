import { useAppDispatch, useAppSelector } from '~/hooks';
import {
  Box,
  Button,
  Dialog,
  Card,
  DialogContent,
  CardContent,
  DialogTitle,
  DialogContentText,
  Grid,
  TextField,
  Typography,
  DialogActions,
  CloseIcon,
} from '~/modules';
import { clearCart, toggleCart } from '~/redux/features';
import { useEffect, useMemo, useState } from 'react';
import { api } from 'src/services/api';

import Item from './components/Item';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const [total, setTotal] = useState(0);
  const [data, setData] = useState<IGameAll[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const getGames = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/games/all');

      const { data, status } = response;

      if (status === 200) {
        setData(data);
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (data: ICart) => {
    dispatch(toggleCart({ cart: data }));
  };

  const sumQuota = useMemo(() => {
    let value = 0;

    cart.forEach((item) => {
      value += item.quota;
    });

    return value;
  }, [cart]);

  const makeBet = async () => {
    setIsSaveLoading(true);
    try {
      const response = await api.post('/bets', {
        amount: total,
        quota: sumQuota,
        teams: cart.map((item) => ({
          awayTeam: item.teamA,
          homeTeam: item.teamB,
          result: item.result,
        })),
      });

      const { status } = response;

      if (status === 200 || status === 201) {
        dispatch(clearCart());
        alert('Aposta feita com sucesso');
        handleClose();
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsSaveLoading(false);
    }
  };

  const handleInputChange = (text: string) => {
    setTotal(Number(text) * sumQuota);
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              {isLoading ? (
                <Typography variant="h6">Carregando</Typography>
              ) : (
                data.map((item) => <Item data={item} onSelect={handleSelect} />)
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ mb: 3 }}>
                BOLETIM
              </Typography>
              {cart.map((item) => (
                <Box
                  sx={{
                    border: '1px solid gray',
                    padding: 1,
                    textAlign: 'center',
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2">
                      {item.teamA} - {item.teamB}
                    </Typography>
                    <CloseIcon />
                  </Box>
                  <hr />
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2">{item.result}</Typography>
                    <Typography variant="body2">
                      {item.quota.toFixed(1)}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Box
                sx={{
                  border: '1px solid gray',
                  padding: 1,
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">
                    Cota: {sumQuota.toFixed(1)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">Montante:</Typography>
                    <TextField
                      sx={{ maxWidth: 100 }}
                      onChange={(input) =>
                        handleInputChange(input.target.value)
                      }
                    />{' '}
                    KZ
                  </Box>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 1,
                    justifyContent: 'space-around',
                  }}
                >
                  <Box>
                    <Typography variant="body2">Total de ganhos</Typography>
                    <Typography variant="body2" color="primary">
                      {total.toFixed(2)} KZ
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    disabled={isSaveLoading}
                  >
                    APOSTAR
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Apostar</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja finalizar a aposta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            disabled={isSaveLoading}
          >
            Não
          </Button>
          <Button
            onClick={makeBet}
            color="primary"
            autoFocus
            disabled={isSaveLoading}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;
