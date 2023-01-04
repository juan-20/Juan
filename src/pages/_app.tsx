import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'

import GlobalStyles from '../../styles/layout/GlobalStyles';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import {Header} from '../components/Header';
import { Analytics } from '@vercel/analytics/react';


function MyApp ({ Component, pageProps }: AppProps) {
  const [test, settest] = useState<any>('');
  let def 
  useEffect(() => {
    const darkThemeMq: any = window.matchMedia("(prefers-color-scheme: dark)");
    def = darkThemeMq
    settest(darkThemeMq.matches)
  }),[]
  let SystemTheme
  if(test === true){
    SystemTheme = light
  }else{
    SystemTheme = dark
  }
  const [theme, setTheme] = useState(SystemTheme);
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
