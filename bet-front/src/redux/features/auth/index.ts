import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '~/modules';
import { authApi } from '~/redux/services';

import { ILoginState } from './type';

const initialState: ILoginState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ILoginSuccess>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state: ILoginState) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
