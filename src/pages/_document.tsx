import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head>
                    {/* <link rel="shortcut icon" href="../../assets/favicon.png" type="image/x-icon" /> */}
                    <title>Juan</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}