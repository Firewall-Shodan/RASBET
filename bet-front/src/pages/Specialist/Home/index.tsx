import { useAppDispatch, useAppSelector } from '~/hooks';
import { Box, Button, Card, CardContent, Grid, Typography } from '~/modules';
import { clearOdds } from '~/redux/features';
import { useEffect, useState } from 'react';
import { api } from 'src/services/api';

import Item from '../components/Item';

const Specialist = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const {
    odds: { odds },
    auth: { user },
  } = useAppSelector((state) => state);

  const saveOdds = async () => {
    setIsSaveLoading(true);
    try {
      const response = await api.post('/games', {
        userId: user?.id,
        games: odds,
      });

      const { status } = response;

      if (status === 200 || status === 201) {
        dispatch(clearOdds());
        alert('Odds salvas com sucesso');
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsSaveLoading(false);
    }
  };

  const getGames = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/games');

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

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={12} md={8}>
        <Card>
          <CardContent>
            {isLoading ? (
              <Typography variant="h4">Carregando</Typography>
            ) : (
              data?.map((game) => <Item data={game} />)
            )}
            <Button
              variant="contained"
              disabled={isSaveLoading}
              onClick={saveOdds}
            >
              Guardar Alterações
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="center" sx={{ mb: 3 }}>
              Em Progresso
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Box
                sx={{
                  border: '1px solid gray',
                  padding: 1,
                  textAlign: 'center',
                  borderRadius: 1,
                  mb: 0.5,
                }}
              />

              <Box
                sx={{
                  border: '1px solid gray',
                  padding: 1,
                  textAlign: 'center',
                  borderRadius: 1,
                  mb: 0.5,
                }}
              />

              <Box
                sx={{
                  border: '1px solid gray',
                  padding: 1,
                  textAlign: 'center',
                  borderRadius: 1,
                  mb: 0.5,
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Specialist;
