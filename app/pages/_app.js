import AppProvider from '../context/AppProvider';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';
import dark from '../styles/dark';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme',dark);
  return (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </AppProvider>
  )
}

export default MyApp
