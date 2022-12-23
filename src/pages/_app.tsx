import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import type { AppProps } from 'next/app'

import GlobalStyles from '../../styles/layout/GlobalStyles';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import {Header} from '../components/Header';
import { Analytics } from '@vercel/analytics/react';

function MyApp ({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  return (
      <ThemeProvider theme={theme}>
          <Analytics />
          <GlobalStyles />
          <Header toggleTheme={toggleTheme}/>
          <Component {...pageProps} />
        </ThemeProvider>
  );
};

export default MyApp
