import { useAppSelector } from '~/hooks';
import { Box, Card, CardContent, Grid, Typography } from '~/modules';
import { numberFormatter } from '~/utils';
import { useEffect, useState } from 'react';
import { api } from 'src/services/api';

const MyBets = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [bets, setBets] = useState<IBet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getGames = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/bets');

      const { data, status } = response;

      if (status === 200) {
        setBets(data);
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
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6" align="center">
            {user?.name}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 5 }}>
            Histórico de Apostas
          </Typography>
          {isLoading ? (
            <Typography variant="h6" align="center">
              Carregando
            </Typography>
          ) : (
            bets.map((bet) => (
              <Box
                sx={{
                  border: '1px solid gray',
                  padding: 2,
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={4}>
                    {bet.betTeams.map((betTeam) => (
                      <>
                        <Typography variant="subtitle1">
                          {betTeam.awayTeam} - {betTeam.homeTeam}
                        </Typography>
                        <Typography variant="body2">
                          {betTeam.result}
                        </Typography>
                      </>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Box
                      sx={{
                        display: 'flex',
                      }}
                    >
                      <Typography variant="body2" sx={{ mr: 5 }}>
                        Montante apostado
                      </Typography>
                      <Typography variant="body2">
                        {numberFormatter(bet.amount)}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                      }}
                    >
                      <Typography variant="body2" sx={{ mr: 5 }}>
                        Total de ganhos
                      </Typography>
                      <Typography variant="body2">
                        {numberFormatter(bet.quota * bet.amount)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyBets;
