import app from "./index.tsx";


Deno.serve({ hostname: "localhost", port: 8080}, app.fetch);
