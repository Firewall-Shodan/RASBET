import { fetchBaseQuery, createApi } from '~/modules';

import { RootState } from '../types';

const baseUrl = process.env.REACT_APP_API_URL;

export const betApi = createApi({
  reducerPath: 'betApi',
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
    createBet: builder.mutation<any, any>({
      query: (body) => ({ url: '/bets', method: 'POST', body }),
      transformResponse: (response: any) => response.data,
    }),
    bets: builder.query<IBet[], string>({
      query: () => '/bets',
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useCreateBetMutation, useBetsQuery } = betApi;
