import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'

import GlobalStyles from '../../styles/layout/GlobalStyles';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import {Header} from '../components/Header';
import { Analytics } from '@vercel/analytics/react';


function MyApp ({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);
  useEffect(() => {
    const darkThemeMq: any = window.matchMedia("(prefers-color-scheme: dark)");
    let language = window.navigator.language;
    let path = window.location.pathname

    if(darkThemeMq.matches){
      setTheme(dark)
    }else{
      setTheme(light)
    }
    if(language === 'pt-BR' && path === '/'){
      window.location.href = '/pt'
    }
  }),[]
  
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
