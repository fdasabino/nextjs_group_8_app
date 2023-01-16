import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="The coolest NFT page" />
        <meta name="keywords" content="Hyper Island, design, front-end" />
        <meta
          name="author"
          content="Francisco Sabino, Regan Ya, Morgan Rapaport, Sammani Ariyarathne"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
