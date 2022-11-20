import {
  configureStore,
  persistReducer,
  reduxStorage,
  setupListeners,
  persistStore,
  combineReducers,
} from '~/modules';

import { authReducer, cartReducer, oddReducer } from './features';
import { authApi, betApi, userApi } from './services';

const persistConfig = {
  key: '@bet/app',
  storage: reduxStorage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [betApi.reducerPath]: betApi.reducer,
  auth: authReducer,
  cart: cartReducer,
  odds: oddReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      betApi.middleware
    ),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
