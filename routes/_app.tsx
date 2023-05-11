// https://fresh.deno.dev/docs/concepts/app-wrapper

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "$app/components/Header.tsx";
import Footer from "$app/components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ayrscott, LLC</title>
      </Head>
      <body>
        <div class="max-w-[1000px] mx-auto block">
          <Header active="Home" />
          <Component />
          <Footer children="" />
        </div>
      </body>
    </>
  );
}
