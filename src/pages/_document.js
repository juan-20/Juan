import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    // render() {
    //     return (
    //         <Html lang='pt'>
    //             <Head>
    //                 <meta name='description' content='Juan Pereira Alves Andrade' />
    //                 <meta name='description' content='Portifolio de Juan' />
    //                 <meta property='og:title' content='Juan' />
    //                 <meta property='og:description' content='Portifolio de Juan' />
    //                 <meta property='og:type' content='website' />
    //                 <meta property="og:image" content='https://avatars.githubusercontent.com/u/49418565?v=4' />
    //             </Head>
    //             <body>
    //                 <Main />
    //                 <NextScript />
    //             </body>
    //         </Html>
    //     )
    // }
}