// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/contact.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/services.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/contact.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/services.tsx": $4,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
