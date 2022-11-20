import { Box, Typography } from '~/modules';
import { formatDateAo } from '~/utils';

import Team from '../Team';
import { ItemProps } from './types';

const Item = ({ data }: ItemProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          border: '1px solid gray',
          borderRadius: 1,
          mb: 2,
          padding: 2,
          flex: 5,
          alignItems: 'center',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Typography variant="body2">{data.homeTeam}</Typography>
            <Typography variant="body2" sx={{ mx: 1 }}>
              -
            </Typography>
            <Typography variant="body2">{data.awayTeam}</Typography>
          </Box>
          <Typography variant="body2">
            {formatDateAo(data.commenceTime)}
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
          <Team
            data={{
              team: data.homeTeam,
            }}
            gameId={data.id}
            side="oddA"
          />

          <Team
            data={{
              team: 'Empate',
            }}
            gameId={data.id}
            side="oddE"
          />

          <Team
            data={{
              team: data.awayTeam,
            }}
            gameId={data.id}
            side="oddB"
          />
        </Box>
      </Box>

      {/* <Box
        sx={{
          border: '1px solid gray',
          padding: 1,
          textAlign: 'center',
          borderRadius: 1,
          mb: 0.5,
          flex: 1,
        }}
      /> */}
    </Box>
  );
};

export default Item;
