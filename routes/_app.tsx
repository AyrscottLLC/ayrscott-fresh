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
      <body class="bg-background max-w-[1200px] mx-auto text-foreground ">
        <nav class="
        mx-auto
        p-4
        bg-nav_red
        ">
          <div class="
          container
          mx-auto
          flex
          items-center
          justify-between
          ">
            <a
              href="/"
              class="
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-400
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:top-9
        z-50
        hover:opacity-75
        transition-opacity
      "
              aria-label="Go to homepage"
            >
              Ayrscott, LLC
              <img
                src="./ayrscott-logo.svg"
                class="w-48 md:w-64 lg:w-72"
                alt="Home Smart Logo"
              />
            </a>
            <button
              id="menu"
              class="
            lg:hidden
            focus:outline-none
            focus-visible:ring-4
            ring-blue-900
            rounded-sm
            ring-offset-4
            ring-offset-blue-400
            transition-colors
            "
              aria-expanded="false"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              role="menubar"
              class="
                hidden
                flex-col
                gap-4
                absolute
                z-40
                right-0
                left-0
                top-16
                bg-nav_red
                shadow-xl
                text-center
                text-lg
                p-6
                items-center
                lg:flex
                lg:flex-row
                lg:static
                lg:shadow-none
                lg:justify-between
                lg:w-full
                "
            >
              <a
                role="menuitem"
                class="
                  py-1
                  px-6
                  focus:outline-none
                  focus-visible:ring-4
                  ring-neutral-900
                  rounded-sm
                  ring-offset-4
                  ring-offset-red-400
                  transition-colors
        "
                href="/"
              >
                Home
              </a>
              <a
                role="menuitem"
                class="
                  py-1
                  px-6
                  focus:outline-none
                  focus-visible:ring-4
                  ring-neutral-900
                  rounded-sm
                  ring-offset-4
                  ring-offset-red-400
                  transition-colors
                  lg:mr-auto
          "
                href="/about"
              >
                About
              </a>
              <a
                role="menuitem"
                class="
                py-1
                px-6
                shadow-xl
                hover:shadow-none
                transition-shadow
                focus:outline-none
                focus-visible:ring-4
                ring-neutral-900
                rounded-sm
                ring-offset-4
                ring-offset-red-400
                transition-colors
                "
                href="/contact"
              >
                Contact
              </a>
              <a
                role="menuitem"
                class="
                py-2
                px-6
                bg-teal-900
                text-white
                shadow-xl
                hover:shadow-none
                transition-shadow
                focus:outline-none
                focus-visible:ring-4
                ring-neutral-900
                rounded-md
                ring-offset-4
                ring-offset-red-400
                "
                href="https://ping.ayrscott.com"
              >
                Ping
              </a>
            </div>
          </div>
        </nav>
        <h1 class="">
          <a href="/">Ayrscott, LLC</a>
        </h1>
        <h2 class="">
          Web, Automation & Software Engineering Services located in
          Mechanicsville, VA
        </h2>

        <div class="p-4">
          <Component />
        </div>

        <a href="https://fresh.deno.dev/">
          <img
            alt="Powered by Fresh"
            title="Powered by Fresh"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            class="m-auto mt-10"
            style="width: 175px; height: auto;"
          />
        </a>
        <script type="module" src="/nav.js"></script>
      </body>
    </html>
  );
}
