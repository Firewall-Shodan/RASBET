import { CacheProvider } from '@emotion/react';

import {
  CssBaseline,
  PersistGate,
  Provider,
  ThemeProvider,
  // useMediaQuery,
} from './modules';
import { persistor, store } from './redux/store';
import Routes from './routes';
import { api } from './services/api';
import { theme } from './theme';
import { createEmotionCache, loadToken } from './utils';

const clientSideEmotionCache = createEmotionCache();

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const defaultTheme = theme('light');

  const token = loadToken();

  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}

export default App;
