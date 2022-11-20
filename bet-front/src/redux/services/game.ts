import { fetchBaseQuery, createApi } from '~/modules';

import { RootState } from '../types';

const baseUrl = process.env.REACT_APP_API_URL;

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    games: builder.query<IGame[], null>({
      query: () => '/games',
      transformResponse: (response: any) => response.data,
    }),
    allGames: builder.query<any[], null>({
      query: () => '/games/all',
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useGamesQuery } = gameApi;
