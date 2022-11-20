import { useAppDispatch } from '~/hooks';
import { Box, Typography } from '~/modules';
import { removeFromCart } from '~/redux/features';
import { formatDateAo } from '~/utils';
import { useState } from 'react';

import { ItemProps } from './types';

const Item = ({ data, onSelect }: ItemProps) => {
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (value: any) => {
    if (selected === value) {
      setSelected(null);
      dispatch(removeFromCart({ id: data.id }));
    } else {
      setSelected(value);
    }

    if (value === -1) {
      onSelect({
        id: data.id,
        quota: data.odds.oddA,
        result: `Vencedor do jogo: ${data.game.awayTeam}`,
        teamA: data.game.awayTeam,
        teamB: data.game.homeTeam,
      });

      return;
    }

    if (value === 0) {
      onSelect({
        id: data.id,
        quota: data.odds.oddE,
        result: `Resultado: Empate`,
        teamA: data.game.awayTeam,
        teamB: data.game.homeTeam,
      });

      return;
    }

    if (value === 1) {
      onSelect({
        id: data.id,
        quota: data.odds.oddB,
        result: `Vencedor do jogo: ${data.game.homeTeam}`,
        teamA: data.game.awayTeam,
        teamB: data.game.homeTeam,
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid gray',
        borderRadius: 1,
        mb: 2,
        padding: 2,
        alignItems: 'center',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Typography variant="body2">{data.game.awayTeam}</Typography>
          <Typography variant="body2" sx={{ mx: 1 }}>
            -
          </Typography>
          <Typography variant="body2">{data.game.homeTeam}</Typography>
        </Box>
        <Typography variant="body2">
          {formatDateAo(data.game.commenceTime)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 2,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            border: '2px solid',
            padding: 1,
            borderRadius: 0.5,
            textAlign: 'center',
            borderColor: selected === -1 ? '#3832A0' : '#000',
          }}
          onClick={() => handleSelect(-1)}
        >
          <Typography variant="body2">{data.game.awayTeam}</Typography>
          <Typography variant="body2">
            {data.odds.oddA === -1 ? '--' : data.odds.oddA.toFixed(1)}
          </Typography>
        </Box>
        <Box
          sx={{
            border: '2px solid',
            padding: 1,
            borderRadius: 0.5,
            textAlign: 'center',
            borderColor: selected === 0 ? '#3832A0' : '#000',
          }}
          onClick={() => handleSelect(0)}
        >
          <Typography variant="body2">Empate</Typography>
          <Typography variant="body2">
            {data.odds.oddE === -1 ? '--' : data.odds.oddE.toFixed(1)}
          </Typography>
        </Box>
        <Box
          sx={{
            border: '2px solid',
            padding: 1,
            borderRadius: 0.5,
            textAlign: 'center',
            borderColor: selected === 1 ? '#3832A0' : '#000',
          }}
          onClick={() => handleSelect(1)}
        >
          <Typography variant="body2">{data.game.homeTeam}</Typography>
          <Typography variant="body2">
            {data.odds.oddB === -1 ? '--' : data.odds.oddB.toFixed(1)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
