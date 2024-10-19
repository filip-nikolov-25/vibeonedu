
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/603ccb1d0d.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body className="antialiased min-h-screen">
        <main >
          {" "}
          {/* Adjust this margin-top as needed */}
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
