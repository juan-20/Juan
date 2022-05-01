import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

// import theme from "../theme/index";

// import "../style.css";
import Global from "../../styles/layout/global";
import Header from "../components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider 
    // theme={theme}
    >
      <NextSeo/>
        <Global>
          <Header/>
          <Component {...pageProps} />
        </Global>
    </ChakraProvider>
  );
};

export default App;
