import type { NextConfig } from "next";
import withVercelToolbar from "@vercel/toolbar/plugins/next";

const nextConfig: NextConfig = {
  images: { unoptimized: false },
};

/* The toolbar is wired through the config rather than mounted in the layout,
   so nothing in app/layout.tsx has to know about it and there is no component
   to remember to remove. `enableInProduction` defaults to false, so it injects
   under `next dev` only and the built site is untouched.

   No `devServerPort`: despite the name it is not this app's port but the port
   the toolbar's own sidecar server listens on, and setting it to 4321 made
   that sidecar race `next dev` for the same socket — the server came up, then
   died with EADDRINUSE. Left unset it picks a free port itself. */
export default withVercelToolbar()(nextConfig);
