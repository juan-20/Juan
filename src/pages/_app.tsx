import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Global from "../../styles/layout/global";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import dark from "../../styles/theme/dark";
import light from "../../styles/theme/light";
import GlobalStyles from "../../styles/layout/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
       <NextSeo/>
        <Global>
          <Header toggleTheme={toggleTheme}/>
          <Component {...pageProps} />
        </Global>
        </ThemeProvider>
    </ChakraProvider>
  );
};

export default App;
