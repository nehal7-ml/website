import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-poppins",
    },
  ],
  vite: {
    plugins: [
      //@ts-expect-error - Tailwind plugin needs fix
      tailwindcss(),
    ],
  },
});
