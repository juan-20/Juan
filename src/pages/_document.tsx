import Document, { Html, Head, Main, NextScript } from 'next/document'
import  me from '../../../public/Iconeanimado-Juan.gif'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pt'>
                <Head>
                    <title>Juan</title>
                    {/* analytics */}
                    <script defer data-domain="juancho.vercel.app" src="https://plausible.io/js/plausible.js"></script>


                    <meta name='description' content='Portifolio de Juan' />
                    <meta property='og:title' content='Juan' />
                    <meta property='og:description' content='Portifolio de Juan' />
                    <meta property='og:type' content='website' />
                    <meta property="og:image" content='https://github.com/juan-20/Juan/blob/main/public/Iconeanimado-Juan.gif?raw=true' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}