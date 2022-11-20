import { createApi, fetchBaseQuery } from '~/modules';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginSuccess, ILogin>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => response.data,
    }),
    register: builder.mutation<IRegisterSuccess, IRegister>({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
