import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '~/modules';

import { RootState } from '../types';

const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

export const userApi = createApi({
  reducerPath: 'userApi',
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
    company: builder.query<ICompany, string>({
      query: (userId) => `/${userId}/companies`,
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useCompanyQuery } = userApi;
