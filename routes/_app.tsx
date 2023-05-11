// https://fresh.deno.dev/docs/concepts/app-wrapper

import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>
          Ayrscott, LLC - Web, Automation & Software Engineering Services
          located in Mechanicsville, VA (RVA)
        </title>
        <meta
          name="description"
          content="Web, software & engineering solutions located in historic Mechanicsville, Virginia"
        />
      </Head>
      <body class="text-center bg-gray-200">
        <h1 class="text-5xl mb-4 mt-2">
          <a href="/">Ayrscott, LLC</a>
        </h1>
        <h2 class="text-xl mb-6 italic">
          Web, Automation & Software Engineering Services located in
          Mechanicsville, VA
        </h2>

        <Component />

        <a href="https://fresh.deno.dev/">
          <img
            alt="Powered by Fresh"
            title="Powered by Fresh"
            src="https://fresh.deno.dev/fresh-badge.svg"
            class="m-auto mt-10"
            style="width: 175px; height: auto;"
          />
        </a>
      </body>
    </html>
  );
}
