import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'

import GlobalStyles from '../../styles/layout/GlobalStyles';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import {Header} from '../components/Header';
import { Analytics } from '@vercel/analytics/react';


function MyApp ({ Component, pageProps }: AppProps) {
  const [system, setSystem] = useState<any>('');
  let def 
  useEffect(() => {
    const darkThemeMq: any = window.matchMedia("(prefers-color-scheme: dark)");
    def = darkThemeMq
    setSystem(darkThemeMq.matches)
  }),[]
  let SystemTheme
  
  if(system === true){
    SystemTheme = dark
  }else{
    SystemTheme = light
  }
  console.log(system)
  console.log(SystemTheme)
  const [theme, setTheme] = useState(SystemTheme.title === 'dark' ? light : dark);
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
